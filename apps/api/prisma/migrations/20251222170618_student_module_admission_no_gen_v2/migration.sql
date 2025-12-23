/*
  Warnings:

  - Added the required column `updatedAt` to the `AdmissionNumberSequence` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AdmissionNumberSequence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schoolId" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "currentCounter" INTEGER NOT NULL DEFAULT 0,
    "padding" INTEGER NOT NULL DEFAULT 5,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AdmissionNumberSequence_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AdmissionNumberSequence" ("currentCounter", "id", "isActive", "padding", "prefix", "schoolId") SELECT "currentCounter", "id", "isActive", "padding", "prefix", "schoolId" FROM "AdmissionNumberSequence";
DROP TABLE "AdmissionNumberSequence";
ALTER TABLE "new_AdmissionNumberSequence" RENAME TO "AdmissionNumberSequence";
CREATE UNIQUE INDEX "AdmissionNumberSequence_schoolId_prefix_key" ON "AdmissionNumberSequence"("schoolId", "prefix");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
