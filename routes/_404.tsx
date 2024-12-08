import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#FB457C]/80">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-white">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="Gifty.lol logoen: En fin piniata."
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4 text-white/80">
            Siden du er på jakt etter finnes ikke.
          </p>
          <a href="/" class="underline">Gå tilbake hjem</a>
        </div>
      </div>
    </>
  );
}
