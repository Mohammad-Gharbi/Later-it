/*
  Warnings:

  - Added the required column `testUserId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testUserId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testUserId` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testUserId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "testUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "testUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "testUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "testUserId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TestUser" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "TestUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_email_key" ON "TestUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_password_key" ON "TestUser"("password");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_testUserId_fkey" FOREIGN KEY ("testUserId") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_testUserId_fkey" FOREIGN KEY ("testUserId") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_testUserId_fkey" FOREIGN KEY ("testUserId") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_testUserId_fkey" FOREIGN KEY ("testUserId") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
