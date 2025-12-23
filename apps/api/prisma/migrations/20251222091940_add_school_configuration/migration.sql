-- CreateTable
CREATE TABLE "SchoolConfiguration" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schoolId" TEXT NOT NULL,
    "attendanceType" TEXT NOT NULL,
    "sessionType" TEXT NOT NULL,
    "sessionRotation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SchoolConfiguration_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SchoolConfiguration_schoolId_key" ON "SchoolConfiguration"("schoolId");
