/*
  Warnings:

  - You are about to drop the column `tags` on the `Article` table. All the data in the column will be lost.
  - Added the required column `tag` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "tags",
ADD COLUMN     "tag" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);
