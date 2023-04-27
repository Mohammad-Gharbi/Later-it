/*
  Warnings:

  - You are about to drop the column `testUserId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `testUserId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `testUserId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `testUserId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the `TestUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_testUserId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_testUserId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_testUserId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_testUserId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "testUserId";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "testUserId";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "testUserId";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "testUserId";

-- DropTable
DROP TABLE "TestUser";
