/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_userId_fkey";

-- DropTable
DROP TABLE "Tags";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "tagName" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
