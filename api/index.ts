import { readFile } from "fs/promises";
import { resolve } from "path";

export async function GET() {
	const agents = (
		await readFile(resolve(process.cwd(), "../agents.txt"), {
			encoding: "utf-8",
		})
	).split("\n");
	const agentsString = agents.map((agent) => `User-agent: ${agent}`).join("\n");
	return new Response(`${agentsString}\nDisallow: /`);
}
