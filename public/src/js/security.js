const HTML_ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;",
};

const DATA_IMAGE_PATTERN = /^data:image\/(png|jpe?g|gif|webp|svg\+xml);(?:base64,[a-z0-9+/=\s]+|utf8,[\w\-\.~!*'();:@&=+$,/?%#[\]]+)$/i;

function toStringSafe(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

export function escapeHtml(value) {
  return toStringSafe(value).replace(/[&<>"'`]/g, (char) => HTML_ESCAPE_MAP[char] || char);
}

export function sanitizeSlugParam(value) {
  return toStringSafe(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function sanitizeUrl(value, options = {}) {
  const {
    fallback = "#",
    allowDataImage = false,
  } = options;

  const raw = toStringSafe(value).trim();
  if (!raw) return fallback;

  if (allowDataImage && DATA_IMAGE_PATTERN.test(raw)) {
    return raw;
  }

  if (raw.startsWith("#") || raw.startsWith("/") || raw.startsWith("./") || raw.startsWith("../")) {
    return raw;
  }

  try {
    const parsed = new URL(raw, window.location.origin);
    const protocol = parsed.protocol.toLowerCase();

    if (protocol === "https:" || protocol === "http:" || protocol === "mailto:" || protocol === "tel:") {
      return parsed.href;
    }

    return fallback;
  } catch {
    return fallback;
  }
}
