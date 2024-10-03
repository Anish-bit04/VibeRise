/*
  Warnings:

  - You are about to drop the column `bigImag` on the `Stream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "bigImag",
ADD COLUMN     "bigImg" TEXT NOT NULL DEFAULT '';
