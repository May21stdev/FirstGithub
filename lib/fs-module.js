import fs from "fs/promises";
import path from "path";

export async function ReadFile(path) {
    const data = await fs.readFile(path, "utf-8");
    return JSON.parse(data);
}

export async function WriteFile(path, data) {
    await fs.writeFile(path, JSON.stringify(data));
}