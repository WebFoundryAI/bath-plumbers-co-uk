import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 15 locations', () => {
      expect(LOCATIONS).toHaveLength(15);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Somerset and Wiltshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(51.1);
        expect(loc.latitude).toBeLessThan(51.6);
      }
    });

    it('every location has longitude within Somerset and Wiltshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-2.7);
        expect(loc.longitude).toBeLessThan(-2.0);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "bath"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('bath');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 15 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(15);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('bath');
      expect(slugs).toContain('bristol');
      expect(slugs).toContain('keynsham');
      expect(slugs).toContain('bradford-on-avon');
      expect(slugs).toContain('radstock');
      expect(slugs).toContain('midsomer-norton');
      expect(slugs).toContain('frome');
      expect(slugs).toContain('corsham');
      expect(slugs).toContain('chippenham');
      expect(slugs).toContain('trowbridge');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "bath"', () => {
      const loc = getLocationBySlug('bath');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Bath');
    });

    it('returns correct location for "trowbridge"', () => {
      const loc = getLocationBySlug('trowbridge');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Trowbridge');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
