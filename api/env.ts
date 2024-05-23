export function GET() {
	return new Response(process.env.NODE_ENV);
}
