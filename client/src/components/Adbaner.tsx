import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

function SponsorAd() {
  useEffect(function () {
    const timer = setTimeout(function () {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.log(e);
      }
    }, 500); // delay helps ads load properly

    return function () {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="project-sponsor-banner">
      <div className="pill pill-sm">Sponsored</div>

      <div style={{ width: "100%" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: "120px" }}
          data-ad-client="ca-pub-3940256099942544"
          data-ad-slot="6300978111"
          data-ad-format="auto"
        ></ins>
      </div>
    </div>
  );
}

export default SponsorAd;