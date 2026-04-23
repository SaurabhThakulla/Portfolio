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
<<<<<<< HEAD
      <div>
        <div className="pill pill-sm">Sponsored</div>
        <h3>Partner Spotlight</h3>
        <p>Reserved for brand collaborations, product partners, or campaign placements.</p>
      </div>
=======
      <div className="pill pill-sm">Sponsored</div>
>>>>>>> 12c35da8554424d46ca0203970858c74a4b211af

      <div style={{ width: "100%" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9781911673673523"
<<<<<<< HEAD
          data-ad-slot="#"
=======
          data-ad-slot="YOUR_AD_SLOT_ID"
>>>>>>> 12c35da8554424d46ca0203970858c74a4b211af
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}

export default SponsorAd;
