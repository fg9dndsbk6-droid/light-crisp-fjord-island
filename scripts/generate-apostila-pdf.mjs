import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const out = "/workspace/public/apostila-fisiopatologia.pdf";
mkdirSync("/workspace/public", { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
page.setDefaultTimeout(180000);
await page.goto("http://127.0.0.1:8080/imprimir", {
  waitUntil: "load",
  timeout: 180000,
});
await page.waitForTimeout(2500);
await page.evaluate(async () => {
  const imgs = [...document.images];
  await Promise.all(
    imgs.map(
      (img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }),
    ),
  );
});
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  margin: { top: "14mm", bottom: "16mm", left: "12mm", right: "12mm" },
});
await browser.close();
console.log("wrote", out);
