const Card = require('../JS/CARD');
const PKMN = require('../JS/PKMN');
var assert = require('assert').strict;
var expect = require('chai').expect;
var should = require('chai').should();

describe('Draw Card', function(){
    const randoCard = new Card("RG","R",false);
    describe('Building Base', function(){
        it('Base Parts should return an Array', function(){
            expect(randoCard.drawBaseParts()).to.be.an('Object');
        });
    })

    describe('Top Bar', function(){
        it('Top Types Should Match Expected End Result',function(){
            let expected = "<g class='TYPE GRASS'><g><path d='M6.08,1.51c0,0-3.15-0.15-4.21,1.35s0.15,2.85,0.15,2.85l0.53-0.55V3.24l0.51,1.4l0.67-0.71L3.6,2.49 l0.52,1.03l1.06-1.11L4.37,3.73L5.4,3.99L4.04,4.26l-0.49,0.8l1.4,0.28L3.21,5.61L2.78,6.32c0,0,2.25,0.6,3-0.9 S6.08,1.51,6.08,1.51z'/></g></g>";
            expect(buildTypeIcon("grass")).to.equal(expected);
        });
    })
})