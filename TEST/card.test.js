const Card = require('../JS/CARD');
var assert = require('assert').strict;
var expect = require('chai').expect;
var should = require('chai').should();

describe('Draw Card', function(){
    const randoCard = new Card("pkmn","RG","R",false);
    describe('Building Base', function(){
        it('Base Parts should return an Array', function(){
            expect(randoCard.drawBaseParts()).to.be.an('Object');
        });
    })
})