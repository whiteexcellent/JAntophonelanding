import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SegmentedControl } from "./SegmentedControl";

export function DemoRail({ items, activeIndex, onSelect }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const sync = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      onSelect(emblaApi.selectedScrollSnap());
    };

    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);

    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollTo(activeIndex);
  }, [activeIndex, emblaApi]);

  const segmentedItems = items.map((item) => ({
    id: item.title,
    label: item.type,
    meta: item.title,
  }));

  return (
    <div className="demo-rail-shell">
      <div className="demo-rail-head">
        <div>
          <span className="demo-rail-kicker">Capture-ready scenes</span>
          <strong>Use-cases aligned to active focus</strong>
        </div>

        <div className="demo-rail-controls">
          <button
            type="button"
            className="demo-rail-arrow"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous demo scene"
          >
            ‹
          </button>
          <button
            type="button"
            className="demo-rail-arrow"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next demo scene"
          >
            ›
          </button>
        </div>
      </div>

      <SegmentedControl
        items={segmentedItems}
        value={items[activeIndex]?.title}
        onChange={(id) => {
          const index = items.findIndex((item) => item.title === id);

          if (index >= 0) {
            onSelect(index);
            emblaApi?.scrollTo(index);
          }
        }}
        className="demo-segmented-control"
        ariaLabel="Demo use case selector"
      />

      <div className="demo-rail-viewport demo-rail-viewport-rich" ref={emblaRef}>
        <div className="demo-rail-container demo-rail-container-rich">
          {items.map((item, index) => (
            <div className="demo-rail-slide demo-rail-slide-rich" key={item.title}>
              <article className={`demo-scene-panel ${index === activeIndex ? "active" : ""}`.trim()}>
                <div className="demo-scene-thumb-wrap">
                  <img src={item.thumbnail} alt={item.title} className="demo-scene-thumb" />
                  <div className="demo-scene-badge-row">
                    <span>{item.type}</span>
                    <span>{item.source}</span>
                  </div>
                </div>

                <div className="demo-scene-copy">
                  <strong>{item.title}</strong>
                  <p>{item.caption}</p>

                  <div className="demo-scene-meta">
                    {(item.signals || []).map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
