const expect = require('chai').expect;
const index = require('../index');

describe('index.js', function () {
  describe('distanceFromHqInBlocks()', function () {
    it('returns a distance in blocks', function () {
      expect(index.distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('returns a distance in blocks', function () {
      expect(index.distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function () {
      expect(index.distanceFromHqInBlocks(34)).to.equal(8);
    });
  });

  describe('distanceFromHqInFeet()', function () {
    it('returns a distance in feet', function () {
      expect(index.distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function () {
      expect(index.distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('calculates distances below 42nd street', function () {
      expect(index.distanceFromHqInFeet(34)).to.equal(2112);
    });
  });

  describe('distanceTravelledInFeet()', function () {
    it('returns the distance travelled in feet', function () {
      expect(index.distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function () {
      expect(index.distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function () {
      expect(index.distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice(start, destination)', function () {
    it('gives customers a free sample', function () {
      expect(index.calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function () {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(index.calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function () {
      expect(index.calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function () {
      expect(index.calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});