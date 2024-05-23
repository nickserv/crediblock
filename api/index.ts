import { open } from "fs/promises";
import { resolve } from "path";

export async function GET() {
	const agents = await Array.fromAsync(
		(await open(resolve(import.meta.dirname, "../agents.txt"))).readLines(),
	);
	const agentsString = agents.map((agent) => `User-agent: ${agent}`).join("\n");
	return new Response(`${agentsString}\nDisallow: /`);
}
