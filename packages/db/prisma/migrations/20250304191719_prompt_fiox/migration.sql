/*
  Warnings:

  - You are about to drop the column `promptId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Prompt` table. All the data in the column will be lost.
  - Added the required column `content` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "promptId";

-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "question",
ADD COLUMN     "content" TEXT NOT NULL;
