-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "author" TEXT,
    "date_published" TEXT,
    "lead_image_url" TEXT,
    "dek" TEXT,
    "denext_page_url" TEXT,
    "url" TEXT,
    "domain" TEXT,
    "excerpt" TEXT,
    "word_count" INTEGER NOT NULL,
    "direction" TEXT,
    "total_pages" INTEGER NOT NULL,
    "rendered_pages" INTEGER NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);
