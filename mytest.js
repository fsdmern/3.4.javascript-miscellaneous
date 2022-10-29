describe('power', function () {
  it('raises 2 to 3rd power', function () {
    assert.equal(power(2, 3), 8);
  });

  it('raises 3 to 4th power', function () {
    assert.equal(power(3, 4), 81);
  });

  it('raises 5 to 3rd power', function () {
    assert.equal(power(5, 3), 125);
  });
});
