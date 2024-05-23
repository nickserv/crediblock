import { open } from "fs/promises";

export async function GET() {
	try {
		const agents = await Array.fromAsync(
			(await open("agents.txt")).readLines(),
		);
		const agentsString = agents
			.map((agent) => `User-agent: ${agent}`)
			.join("\n");
		return new Response(`${agentsString}\nDisallow: /`);
	} catch (error) {
		console.error(error);
	}
}
