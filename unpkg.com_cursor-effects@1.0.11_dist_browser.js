var cursoreffects = function (e) {
  "use strict";
  return (e.emojiCursor = function (e) {
    const t = e && e.element;
    let i,
      n = t || document.body,
      o = window.innerWidth,
      s = window.innerHeight;
    const h = { x: o / 2, y: o / 2 },
      c = { x: o / 2, y: o / 2 };
    let l = 0;
    const d = [],
      r = [];

    const a = window.matchMedia("(prefers-reduced-motion: reduce)");

    function A() {
      if (a.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
      (i = document.createElement("canvas")),
        (n.style.cursor = "none"),
        (i.style.top = "0px"),
        (i.style.left = "0px"),
        (i.style.pointerEvents = "none"),
        t
          ? ((i.style.position = "absolute"), n.appendChild(i), (i.width = n.clientWidth), (i.height = n.clientHeight))
          : ((i.style.position = "fixed"), document.body.appendChild(i), (i.width = o), (i.height = s));

      i.style.cursor = "none";

      i.addEventListener("mousemove", p, { passive: !1 });
      window.addEventListener("resize", f);

      v();
    }

    function f(e) {
      (o = window.innerWidth), (s = window.innerHeight);
      t ? ((i.width = n.clientWidth), (i.height = n.clientHeight)) : ((i.width = o), (i.height = s));
    }

    function p(e) {
      e.timeStamp - l < 16 ||
        window.requestAnimationFrame(() => {
          if (t) {
            const e = n.getBoundingClientRect();
            (h.x = e.left), (h.y = e.top);
          } else (h.x = 0), (h.y = 0);

          y(h.x, h.y, r[Math.floor(Math.random() * r.length)]);
          c.x = h.x;
          c.y = h.y;
          l = e.timeStamp;
        });
    }

    function y(e, t, i) {
      d.push(new x(e, t, i));
    }

    function v() {
      !(function () {
        if (0 !== d.length) {
          const e = i.getContext("2d");
          e.clearRect(0, 0, o, s);
          for (let t = 0; t < d.length; t++) d[t].update(e);
          for (let t = d.length - 1; t >= 0; t--) d[t].lifeSpan < 0 && d.splice(t, 1);
          0 == d.length && e.clearRect(0, 0, o, s);
        }
      })();

      requestAnimationFrame(v);
    }

    function x(e, t, i) {
      const n = Math.floor(30 * Math.random() + 60);
      (this.initialLifeSpan = n),
        (this.lifeSpan = n),
        (this.position = { x: e, y: t }),
        (this.canv = i),
        (this.update = function (e) {
          this.position.y += 1.5;
          this.lifeSpan--;

          const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);

          e.drawImage(this.canv, this.position.x - this.canv.width / 2 * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t);
        });
    }

    a.onchange = () => {
      a.matches ? w() : A();
    };

    A();

    return {
      destroy: w,
    };
  }),
  e.emojiCursor(e);
};
