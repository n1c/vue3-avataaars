import { describe, it, expect } from 'vitest';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import * as Options from '@/Options';

// Annoyingly the Options don't fully map to folders [plurals etc].
const options: Record<string, string[]> = {
  accessories: Options.Accessories,
  eyebrows: Options.Eyebrows,
  eyes: Options.Eyes,
  facialHair: Options.FacialHair,
  graphicShirt: Options.GraphicShirt,
  clothes: Options.Clothes,
  mouth: Options.Mouths,
  tops: Options.Tops,
};

describe('Options', () => {
  it('All options exist for components', () => {
    // Read all our parts folders, for each of them make sure there's a
    // corresponding entry in the 'Options' keys.
    readdirSync(join(__dirname, 'parts'), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .forEach((e) => {
        readdirSync(join(__dirname, 'parts', e))
          .map((f) => f.substring(0, f.indexOf('.')))
          .forEach((f) => {
            expect(options[e].includes(f)).toBe(true);
          });
      });
  });

  it('All components exist for options', () => {
    Object.keys(options).forEach((key) => {
      options[key].forEach((o) => {
        const p = join(__dirname, 'parts', key, `${o}.vue`);
        expect(existsSync(p)).toBe(true);
      });
    });
  });
});
