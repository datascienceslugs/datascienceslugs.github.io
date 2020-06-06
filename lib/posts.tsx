import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// Keys at the top of the markdown file
export interface MatterInfo {
  id: string;
  title: string;
  date: string;
  blog: boolean;
}

export interface PostData extends MatterInfo {
  contentHtml: string;
}

export function getSortedPostsData(): MatterInfo[] {
  // Get file names under /posts
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith("*.md"));
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<string> = matter(fileContents);

    // Combine the data with the id
    return {
      id: id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      blog: matterResult.data.blog,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a: MatterInfo, b: MatterInfo) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: id,
    contentHtml: contentHtml,
    date: matterResult.data.date,
    title: matterResult.data.title,
    blog: matterResult.data.blog,
  };
}
