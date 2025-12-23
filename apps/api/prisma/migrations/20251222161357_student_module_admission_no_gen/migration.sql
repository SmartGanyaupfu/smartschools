-- CreateTable
CREATE TABLE "AdmissionNumberSequence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schoolId" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "currentCounter" INTEGER NOT NULL DEFAULT 0,
    "padding" INTEGER NOT NULL DEFAULT 5,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "AdmissionNumberSequence_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AdmissionNumberSequence_schoolId_prefix_key" ON "AdmissionNumberSequence"("schoolId", "prefix");
