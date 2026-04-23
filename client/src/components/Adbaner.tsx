import { useEffect } from "react";

// Allow TypeScript to recognize the AdSense queue injected by the script in index.html
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

function SponsorAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="project-sponsor-banner">
      <div className="pill pill-sm">Sponsored</div>

      <div style={{ width: "100%" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9781911673673523"
          data-ad-slot="#"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}

export default SponsorAd;
