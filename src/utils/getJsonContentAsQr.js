// Implements the QR Code Model 2 spec (ISO/IEC 18004) entirely in browser JS.
// No CDN fetch, no npm package, no WASM.

// ── EC level indices ──────────────────────────────────────────────────────────
const _EC = { L: 0, M: 1, Q: 2, H: 3 };
const _EC_IND = [0b01, 0b00, 0b11, 0b10]; // format-info indicator bits

// ── Byte-mode capacity [version 1..40][L, M, Q, H] ───────────────────────────
const _CAP = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 48],
  [134, 106, 74, 57],
  [154, 122, 86, 69],
  [192, 152, 108, 79],
  [230, 180, 130, 97],
  [271, 213, 151, 116],
  [321, 251, 177, 135],
  [367, 287, 203, 157],
  [425, 331, 241, 185],
  [458, 362, 258, 193],
  [520, 402, 292, 215],
  [586, 450, 322, 253],
  [644, 504, 364, 283],
  [718, 560, 394, 313],
  [792, 624, 442, 341],
  [858, 666, 482, 385],
  [929, 711, 509, 406],
  [1003, 779, 565, 442],
  [1091, 857, 611, 464],
  [1171, 911, 661, 514],
  [1273, 997, 715, 538],
  [1367, 1059, 751, 596],
  [1465, 1125, 805, 628],
  [1528, 1190, 868, 661],
  [1628, 1264, 908, 701],
  [1732, 1370, 982, 745],
  [1840, 1452, 1030, 793],
  [1952, 1538, 1112, 845],
  [2068, 1628, 1168, 901],
  [2188, 1722, 1228, 961],
  [2303, 1809, 1283, 986],
  [2431, 1911, 1351, 1054],
  [2563, 1989, 1423, 1096],
  [2699, 2099, 1499, 1142],
  [2809, 2213, 1579, 1222],
  [2953, 2331, 1663, 1276],
];

// ── EC block structure [version 1..40][L,M,Q,H] ──────────────────────────────
// [ecPerBlock, numBlocks1, dataPerBlock1, numBlocks2, dataPerBlock2]
// numBlocks2 = 0 → single group only
const _BLK = [
  [
    [7, 1, 19, 0, 0],
    [10, 1, 16, 0, 0],
    [13, 1, 13, 0, 0],
    [17, 1, 9, 0, 0],
  ],
  [
    [10, 1, 34, 0, 0],
    [16, 1, 28, 0, 0],
    [22, 1, 22, 0, 0],
    [28, 1, 16, 0, 0],
  ],
  [
    [15, 1, 55, 0, 0],
    [26, 1, 44, 0, 0],
    [18, 2, 17, 0, 0],
    [22, 2, 13, 0, 0],
  ],
  [
    [20, 1, 80, 0, 0],
    [18, 2, 32, 0, 0],
    [26, 2, 24, 0, 0],
    [16, 4, 9, 0, 0],
  ],
  [
    [26, 1, 108, 0, 0],
    [24, 2, 43, 0, 0],
    [18, 2, 15, 2, 16],
    [22, 2, 11, 2, 12],
  ],
  [
    [18, 2, 68, 0, 0],
    [16, 4, 27, 0, 0],
    [24, 4, 19, 0, 0],
    [28, 4, 15, 0, 0],
  ],
  [
    [20, 2, 78, 0, 0],
    [18, 4, 31, 0, 0],
    [18, 2, 14, 4, 15],
    [26, 4, 13, 1, 14],
  ],
  [
    [24, 2, 97, 0, 0],
    [22, 2, 38, 2, 39],
    [22, 4, 18, 2, 19],
    [26, 4, 14, 2, 15],
  ],
  [
    [30, 2, 116, 0, 0],
    [22, 3, 36, 2, 37],
    [20, 4, 16, 4, 17],
    [24, 4, 12, 4, 13],
  ],
  [
    [18, 2, 68, 2, 69],
    [26, 4, 43, 1, 44],
    [24, 6, 19, 2, 20],
    [28, 6, 15, 2, 16],
  ],
  [
    [20, 4, 81, 0, 0],
    [30, 1, 50, 4, 51],
    [28, 4, 22, 4, 23],
    [24, 3, 12, 8, 13],
  ],
  [
    [24, 2, 92, 2, 93],
    [22, 6, 36, 2, 37],
    [26, 4, 20, 6, 21],
    [28, 7, 14, 4, 15],
  ],
  [
    [26, 4, 107, 0, 0],
    [22, 8, 37, 1, 38],
    [24, 8, 20, 4, 21],
    [22, 12, 11, 4, 12],
  ],
  [
    [30, 3, 115, 1, 116],
    [24, 4, 40, 5, 41],
    [20, 11, 16, 5, 17],
    [24, 11, 12, 5, 13],
  ],
  [
    [22, 5, 87, 1, 88],
    [24, 5, 41, 5, 42],
    [30, 5, 24, 7, 25],
    [24, 11, 12, 7, 13],
  ],
  [
    [24, 5, 98, 1, 99],
    [28, 7, 45, 3, 46],
    [24, 15, 19, 2, 20],
    [30, 3, 15, 13, 16],
  ],
  [
    [28, 1, 107, 5, 108],
    [28, 10, 46, 1, 47],
    [28, 1, 22, 15, 23],
    [28, 2, 14, 17, 15],
  ],
  [
    [30, 5, 120, 1, 121],
    [26, 9, 43, 4, 44],
    [28, 17, 22, 1, 23],
    [28, 2, 14, 19, 15],
  ],
  [
    [28, 3, 113, 4, 114],
    [26, 3, 44, 11, 45],
    [26, 17, 21, 4, 22],
    [26, 9, 13, 16, 14],
  ],
  [
    [28, 3, 107, 5, 108],
    [26, 3, 41, 13, 42],
    [30, 15, 24, 5, 25],
    [28, 15, 15, 10, 16],
  ],
  [
    [28, 4, 116, 4, 117],
    [26, 17, 42, 0, 0],
    [28, 17, 22, 6, 23],
    [30, 19, 16, 6, 17],
  ],
  [
    [28, 2, 111, 7, 112],
    [28, 17, 46, 0, 0],
    [30, 7, 24, 16, 25],
    [24, 34, 13, 0, 0],
  ],
  [
    [30, 4, 121, 5, 122],
    [28, 4, 47, 14, 48],
    [30, 11, 24, 14, 25],
    [30, 16, 15, 14, 16],
  ],
  [
    [30, 6, 117, 4, 118],
    [28, 6, 45, 14, 46],
    [30, 11, 24, 16, 25],
    [30, 30, 16, 2, 17],
  ],
  [
    [26, 8, 106, 4, 107],
    [28, 8, 47, 13, 48],
    [30, 7, 24, 22, 25],
    [30, 22, 15, 13, 16],
  ],
  [
    [28, 10, 114, 2, 115],
    [28, 19, 46, 4, 47],
    [28, 28, 22, 6, 23],
    [30, 33, 16, 4, 17],
  ],
  [
    [30, 8, 122, 4, 123],
    [28, 22, 45, 3, 46],
    [30, 8, 23, 26, 24],
    [30, 12, 15, 28, 16],
  ],
  [
    [30, 3, 117, 10, 118],
    [28, 3, 45, 23, 46],
    [30, 4, 24, 31, 25],
    [30, 11, 15, 31, 16],
  ],
  [
    [30, 7, 116, 7, 117],
    [28, 21, 45, 7, 46],
    [30, 1, 23, 37, 24],
    [30, 19, 15, 26, 16],
  ],
  [
    [30, 5, 115, 10, 116],
    [28, 19, 45, 10, 46],
    [30, 15, 24, 25, 25],
    [30, 23, 15, 25, 16],
  ],
  [
    [30, 13, 115, 3, 116],
    [28, 2, 45, 29, 46],
    [30, 42, 24, 1, 25],
    [30, 23, 15, 28, 16],
  ],
  [
    [30, 17, 115, 0, 0],
    [28, 10, 45, 23, 46],
    [30, 10, 24, 35, 25],
    [30, 19, 15, 35, 16],
  ],
  [
    [30, 17, 115, 1, 116],
    [28, 14, 45, 21, 46],
    [30, 29, 24, 19, 25],
    [30, 11, 15, 46, 16],
  ],
  [
    [30, 13, 115, 6, 116],
    [28, 14, 45, 23, 46],
    [30, 44, 24, 7, 25],
    [30, 59, 16, 1, 17],
  ],
  [
    [30, 12, 121, 7, 122],
    [28, 12, 45, 26, 46],
    [30, 39, 24, 14, 25],
    [30, 22, 15, 41, 16],
  ],
  [
    [30, 6, 121, 14, 122],
    [28, 6, 45, 34, 46],
    [30, 46, 24, 10, 25],
    [30, 2, 15, 64, 16],
  ],
  [
    [30, 17, 122, 4, 123],
    [28, 29, 45, 14, 46],
    [30, 49, 24, 10, 25],
    [30, 24, 15, 46, 16],
  ],
  [
    [30, 4, 122, 18, 123],
    [28, 13, 45, 32, 46],
    [30, 48, 24, 14, 25],
    [30, 42, 15, 32, 16],
  ],
  [
    [30, 20, 117, 4, 118],
    [28, 40, 45, 7, 46],
    [30, 43, 24, 22, 25],
    [30, 10, 15, 67, 16],
  ],
  [
    [30, 19, 118, 6, 119],
    [28, 18, 45, 31, 46],
    [30, 34, 24, 34, 25],
    [30, 20, 15, 61, 16],
  ],
];

// ── Alignment pattern center positions [version 1..40] ────────────────────────
const _ALIGN = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170],
];

// ── GF(256) tables (primitive polynomial 0x11D) ───────────────────────────────
const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
})();

const gfMul = (a, b) => (a === 0 || b === 0 ? 0 : GF_EXP[GF_LOG[a] + GF_LOG[b]]);

// Multiply two polynomials in GF(256)
const gfPolyMul = (p, q) => {
  const r = new Uint8Array(p.length + q.length - 1);
  for (let i = 0; i < p.length; i++)
    for (let j = 0; j < q.length; j++) r[i + j] ^= gfMul(p[i], q[j]);
  return r;
};

// Build RS generator polynomial for n EC codewords
const buildGenerator = (n) => {
  let g = new Uint8Array([1]);
  for (let i = 0; i < n; i++) g = gfPolyMul(g, new Uint8Array([1, GF_EXP[i]]));
  return g;
};

// Compute Reed-Solomon EC codewords for one data block
const rsEncode = (data, ecCount) => {
  const gen = buildGenerator(ecCount);
  const msg = new Uint8Array(data.length + ecCount);
  msg.set(data);
  for (let i = 0; i < data.length; i++) {
    const c = msg[i];
    if (c !== 0) for (let j = 1; j < gen.length; j++) msg[i + j] ^= gfMul(gen[j], c);
  }
  return msg.slice(data.length);
};

// ── Data encoding (byte mode) ─────────────────────────────────────────────────
const encodeData = (text, version, ecLevel) => {
  const [ecPerBlock, nb1, db1, nb2, db2] = _BLK[version - 1][ecLevel];
  const totalDataCW = nb1 * db1 + nb2 * db2;
  const bytes = new TextEncoder().encode(text);

  const bits = [];
  const pushBits = (val, len) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
  };

  pushBits(0b0100, 4); // byte mode indicator
  pushBits(bytes.length, version <= 9 ? 8 : 16); // character count
  for (const b of bytes) pushBits(b, 8);

  // Terminator + byte alignment
  const cap = totalDataCW * 8;
  for (let i = 0; i < 4 && bits.length < cap; i++) bits.push(0);
  while (bits.length % 8 !== 0) bits.push(0);

  // Padding codewords
  const pad = [0b11101100, 0b00010001];
  let pi = 0;
  while (bits.length < cap) pushBits(pad[pi++ % 2], 8);

  // Bits → codewords
  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
    codewords.push(b);
  }

  return { codewords, ecPerBlock, nb1, db1, nb2, db2 };
};

// ── Block splitting, RS, interleaving ────────────────────────────────────────
const buildFinalMessage = (codewords, ecPerBlock, nb1, db1, nb2, db2) => {
  const blocks = [];
  let idx = 0;
  for (let i = 0; i < nb1; i++) {
    blocks.push(codewords.slice(idx, idx + db1));
    idx += db1;
  }
  for (let i = 0; i < nb2; i++) {
    blocks.push(codewords.slice(idx, idx + db2));
    idx += db2;
  }

  const ecBlocks = blocks.map((b) => rsEncode(new Uint8Array(b), ecPerBlock));

  const out = [];
  const maxData = Math.max(db1, db2 || 0);
  for (let i = 0; i < maxData; i++) for (const b of blocks) if (i < b.length) out.push(b[i]);
  for (let i = 0; i < ecPerBlock; i++) for (const ec of ecBlocks) out.push(ec[i]);

  return out;
};

// ── Matrix construction ───────────────────────────────────────────────────────
const buildMatrix = (version, finalMessage) => {
  const size = 4 * version + 17;
  const modules = new Uint8Array(size * size); // 0=light 1=dark
  const reserved = new Uint8Array(size * size); // 1=non-data

  const set = (r, c, dark) => {
    modules[r * size + c] = dark ? 1 : 0;
    reserved[r * size + c] = 1;
  };
  const rsv = (r, c) => {
    reserved[r * size + c] = 1;
  };

  // Finder patterns (7×7) + separators
  const placeFinder = (tr, lc) => {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const row = tr + r,
          col = lc + c;
        if (row < 0 || row >= size || col < 0 || col >= size) continue;
        const inF = r >= 0 && r <= 6 && c >= 0 && c <= 6;
        set(
          row,
          col,
          inF &&
            (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4))
        );
      }
    }
  };
  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    set(6, i, i % 2 === 0);
    set(i, 6, i % 2 === 0);
  }

  // Dark module
  set(4 * version + 9, 8, true);

  // Alignment patterns
  const ap = _ALIGN[version - 1];
  for (let ai = 0; ai < ap.length; ai++) {
    for (let aj = 0; aj < ap.length; aj++) {
      const r = ap[ai],
        c = ap[aj];
      if (reserved[r * size + c]) continue; // overlaps finder/timing
      for (let dr = -2; dr <= 2; dr++)
        for (let dc = -2; dc <= 2; dc++)
          set(r + dr, c + dc, Math.abs(dr) === 2 || Math.abs(dc) === 2 || (dr === 0 && dc === 0));
    }
  }

  // Format info areas
  for (let i = 0; i <= 8; i++) {
    rsv(i, 8);
    rsv(8, i);
  }
  for (let i = 0; i < 8; i++) {
    rsv(size - 1 - i, 8);
    rsv(8, size - 1 - i);
  }

  // Version info areas (v7+)
  if (version >= 7) {
    for (let i = 0; i < 18; i++) {
      const r = i % 6,
        c = Math.floor(i / 6);
      rsv(r, size - 11 + c);
      rsv(size - 11 + c, r);
    }
  }

  // Data placement (zigzag)
  const bits = [];
  for (const cw of finalMessage) for (let b = 7; b >= 0; b--) bits.push((cw >> b) & 1);

  let bitIdx = 0,
    goingUp = true;
  for (let rightCol = size - 1; rightCol >= 1; rightCol -= 2) {
    if (rightCol === 6) rightCol--;
    for (let step = 0; step < size; step++) {
      const row = goingUp ? size - 1 - step : step;
      for (let dc = 0; dc < 2; dc++) {
        const col = rightCol - dc;
        if (!reserved[row * size + col])
          modules[row * size + col] = bitIdx < bits.length ? bits[bitIdx++] : 0;
      }
    }
    goingUp = !goingUp;
  }

  return { modules, reserved, size };
};

// ── Masking ───────────────────────────────────────────────────────────────────
const MASK_FN = [
  (r, c) => (r + c) % 2 === 0,
  (r, c) => r % 2 === 0,
  (r, c) => c % 3 === 0,
  (r, c) => (r + c) % 3 === 0,
  (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
];

const applyMask = (modules, reserved, size, m) => {
  const fn = MASK_FN[m];
  const out = new Uint8Array(modules);
  for (let r = 0; r < size; r++)
    for (let c = 0; c < size; c++) if (!reserved[r * size + c] && fn(r, c)) out[r * size + c] ^= 1;
  return out;
};

const penaltyScore = (mod, size) => {
  let score = 0;

  // Rule 1: runs of 5+
  for (let r = 0; r < size; r++) {
    for (const isRow of [true, false]) {
      let run = 1,
        last = -1;
      for (let i = 0; i < size; i++) {
        const v = isRow ? mod[r * size + i] : mod[i * size + r];
        if (v === last) {
          run++;
          if (run === 5) score += 3;
          else if (run > 5) score++;
        } else {
          run = 1;
          last = v;
        }
      }
    }
  }

  // Rule 2: 2×2 blocks
  for (let r = 0; r < size - 1; r++)
    for (let c = 0; c < size - 1; c++) {
      const v = mod[r * size + c];
      if (
        v === mod[r * size + c + 1] &&
        v === mod[(r + 1) * size + c] &&
        v === mod[(r + 1) * size + c + 1]
      )
        score += 3;
    }

  // Rule 3: finder-like patterns
  const p1 = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
  const p2 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= size - 11; c++) {
      let a = true,
        b = true,
        x = true,
        y = true;
      for (let k = 0; k < 11; k++) {
        if (mod[r * size + c + k] !== p1[k]) a = false;
        if (mod[r * size + c + k] !== p2[k]) b = false;
        if (mod[(c + k) * size + r] !== p1[k]) x = false;
        if (mod[(c + k) * size + r] !== p2[k]) y = false;
      }
      if (a || b) score += 40;
      if (x || y) score += 40;
    }
  }

  // Rule 4: dark proportion
  const dark = mod.reduce((s, v) => s + v, 0);
  const pct = (dark / (size * size)) * 100;
  const p5 = Math.floor(pct / 5) * 5;
  score += Math.min(Math.abs(p5 - 50), Math.abs(p5 + 5 - 50)) * 2;

  return score;
};

// ── Format info ───────────────────────────────────────────────────────────────
// Generator: x^10 + x^8 + x^5 + x^4 + x^2 + x + 1 = 0x537; XOR mask = 0x5412
const calcFormatInfo = (ecLevel, maskPattern) => {
  const data = (_EC_IND[ecLevel] << 3) | maskPattern;
  let rem = data << 10;
  for (let i = 14; i >= 10; i--) if (rem & (1 << i)) rem ^= 0x537 << (i - 10);
  return ((data << 10) | rem) ^ 0x5412;
};

// Format info bit positions (copy 1, for bits 0..14)
const _FMT_POS = [
  [8, 0],
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 7],
  [8, 8],
  [7, 8],
  [5, 8],
  [4, 8],
  [3, 8],
  [2, 8],
  [1, 8],
  [0, 8],
];

const placeFormatInfo = (mod, size, fmt) => {
  for (let i = 0; i < 15; i++) {
    const bit = (fmt >> i) & 1;
    const [r, c] = _FMT_POS[i];
    mod[r * size + c] = bit;
    // Copy 2: bottom-left (bits 0-6) + top-right (bits 7-14)
    if (i < 7) mod[(size - 1 - i) * size + 8] = bit;
    else mod[8 * size + (size - 15 + i)] = bit;
  }
  mod[(size - 8) * size + 8] = 1; // dark module (always)
};

// ── Version info (v7+) ────────────────────────────────────────────────────────
// Generator: x^12 + x^11 + x^10 + x^9 + x^8 + x^5 + x^2 + 1 = 0x1F25
const placeVersionInfo = (mod, size, version) => {
  let rem = version << 12;
  for (let i = 17; i >= 12; i--) if (rem & (1 << i)) rem ^= 0x1f25 << (i - 12);
  const vi = (version << 12) | rem;
  for (let i = 0; i < 18; i++) {
    const bit = (vi >> i) & 1;
    const r = i % 6,
      c = Math.floor(i / 6);
    mod[r * size + (size - 11 + c)] = bit;
    mod[(size - 11 + c) * size + r] = bit;
  }
};

// ── Canvas rendering → PNG data URL ──────────────────────────────────────────
const renderToDataUrl = (mod, size, opts) => {
  const { width = 256, margin = 2, darkColor = '#000000', lightColor = '#ffffff' } = opts;
  const cell = Math.max(1, Math.floor(width / (size + 2 * margin)));
  const imgSize = cell * (size + 2 * margin);

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = imgSize;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = lightColor;
  ctx.fillRect(0, 0, imgSize, imgSize);
  ctx.fillStyle = darkColor;

  for (let r = 0; r < size; r++)
    for (let c = 0; c < size; c++)
      if (mod[r * size + c]) ctx.fillRect((margin + c) * cell, (margin + r) * cell, cell, cell);

  return canvas.toDataURL('image/png');
};

// ── Public API ────────────────────────────────────────────────────────────────
/**
 * Encodes a JSON object into a 2D QR code and returns a PNG data URL.
 *
 * Pure JavaScript — no CDN fetch, no npm dependency, no WASM.
 * Implements QR Code Model 2 (ISO/IEC 18004), byte mode, versions 1–40.
 *
 * @param {object} json - Any JSON-serialisable value.
 * @param {object}  [options]
 * @param {number}  [options.width=256]                  - Output image width in px.
 * @param {'L'|'M'|'Q'|'H'} [options.errorCorrectionLevel='M']
 * @param {number}  [options.margin=2]                   - Quiet-zone width in modules.
 * @param {string}  [options.darkColor='#000000']
 * @param {string}  [options.lightColor='#ffffff']
 *
 * @returns {{ success: boolean, dataUrl?: string, text?: string, byteSize?: number, version?: number, error?: string }}
 */
const getJsonContentAsQr = (json, options = {}) => {
  try {
    const {
      width = 256,
      errorCorrectionLevel = 'M',
      margin = 2,
      darkColor = '#000000',
      lightColor = '#ffffff',
    } = options;

    const text = JSON.stringify(json);
    if (!text || text === 'undefined')
      return { success: false, error: 'Input is not JSON-serialisable.' };

    const ecLevel = _EC[errorCorrectionLevel] ?? _EC.M;
    const byteSize = new TextEncoder().encode(text).length;

    // Find minimum version that fits
    let version = null;
    for (let v = 1; v <= 40; v++) {
      if (_CAP[v - 1][ecLevel] >= byteSize) {
        version = v;
        break;
      }
    }
    if (!version) return { success: false, error: `Payload too large for QR (${byteSize} bytes).` };

    // Encode → RS → interleave
    const { codewords, ecPerBlock, nb1, db1, nb2, db2 } = encodeData(text, version, ecLevel);
    const finalMsg = buildFinalMessage(codewords, ecPerBlock, nb1, db1, nb2, db2);

    // Build base matrix
    const { modules, reserved, size } = buildMatrix(version, finalMsg);

    // Evaluate all 8 masks, pick lowest penalty
    let bestMask = 0,
      bestScore = Infinity;
    for (let m = 0; m < 8; m++) {
      const masked = applyMask(modules, reserved, size, m);
      placeFormatInfo(masked, size, calcFormatInfo(ecLevel, m));
      if (version >= 7) placeVersionInfo(masked, size, version);
      const s = penaltyScore(masked, size);
      if (s < bestScore) {
        bestScore = s;
        bestMask = m;
      }
    }

    // Apply winning mask + write format/version info
    const final = applyMask(modules, reserved, size, bestMask);
    placeFormatInfo(final, size, calcFormatInfo(ecLevel, bestMask));
    if (version >= 7) placeVersionInfo(final, size, version);

    const dataUrl = renderToDataUrl(final, size, { width, margin, darkColor, lightColor });

    return { success: true, dataUrl, text, byteSize, version };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export default getJsonContentAsQr;
