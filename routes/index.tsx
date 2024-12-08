export default function Home() {
  return (
    <div class="py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <iframe
          className="min-h-[1400px] w-full"
          title="Secret santa form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdC1csSVNzAuBWzdHgsJi3lYAq3T0mGmxXWy5Z1A1CSP90KSQ/viewform?embedded=true"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
