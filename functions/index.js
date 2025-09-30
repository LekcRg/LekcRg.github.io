export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const host = url.hostname;

  const originResp = await env.ASSETS.fetch(request);

  const ct = originResp.headers.get("Content-Type") || "";
  if (!ct.includes("text/html")) return originResp;

  if (!host.endsWith("webeefy.com")) return originResp;

  return new HTMLRewriter()
    .on(".logo", {
      element(el) {
        el.setInnerContent("Webeefy.com", { html: false });
      }
    })
    .transform(originResp);
}
