import 'dotenv/config';
import { PrismaClient } from './generated/prisma/client';

import { PrismaLibSql } from '@prisma/adapter-libsql';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? 'file:./smartschoolsdev.db', // Your local SQLite file path
  // authToken: '...'  // Only add this if connecting to a remote Turso DB
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // SCHOOL
  const school = await prisma.school.create({
    data: {
      name: 'Demo School',
      code: 'DEMO',
      email: 'admin@demo.school',
    },
  });

  // ROLES
  const superAdminRole = await prisma.role.create({
    data: { name: 'SUPER_ADMIN' },
  });

  // USER
  const passwordHash = await bcrypt.hash('Admin@123', 10);

  await prisma.user.create({
    data: {
      firstName: 'Super',
      lastName: 'Admin',
      email: 'admin@demo.school',
      passwordHash,
      roleId: superAdminRole.id,
      schoolId: school.id,
    },
  });

  console.log('✅ Database seeded');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
