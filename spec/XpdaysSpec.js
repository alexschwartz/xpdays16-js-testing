describe('Xpdays test suite', function() {
	beforeEach(function() {
		this.xdde = new Xpdays();
	});

	describe('returnsNumber()', function() {
		it('returns a 5', function() {
			expect(this.xdde.returnsNumber()).toEqual(5);
		});

		it('does not return 4', function() {
		    expect(this.xdde.returnsNumber()).not.toEqual(4);
		});
	});

	it('returns the same object', function() {
		var someObject = {};
		var actual = altersAndReturnsTheSameObject(someObject);

		expect(actual).toBe(someObject);
	});

	it('checks the array', function() {
		var actual = returnsArray();
		var expected = [1, 2, 3, 4];

		expect(actual).toEqual(expected);
	});

	describe('returnsFunction()', function() {
	    it('returns a function', function() {
	        expect(returnsFunction(1)).toEqual(jasmine.any(Function));
	    });

		it('doubles the value', function() {
		    var curryFunction = returnsFunction(1);
			var actual = curryFunction();
			expect(actual).toBe(2);
		});
	});
	
	describe('throwsMessage', function() {
	    it('throws "o noes" when providing a param', function() {
			var throwWrapper = function () {
				throwsMessage(true);
			};

			expect(throwWrapper).toThrow('o noes!');
	    });

		it('does now throw', function() {
		    var throwWrapper = function () {
				throwsMessage();
			};
			expect(throwWrapper).not.toThrow();
		});
	});

	describe('throwsError', function() {
	    it('throws an error with the message "kaputt"', function() {
	        var throwWrapper = function () {
				throwsError();
			};
			expect(throwWrapper).toThrowError('kaputt');
	    });
	});

	describe('callsAnotherFunction()', function() {
	    it('checks that the callback is called using done', function(done) {
	        function callback() {
				done();
			}
			this.xdde.callsAnotherFunction(callback);
	    });

		it('checks that the callback is called using spies', function() {
		    var callback = jasmine.createSpy('Lena');
			this.xdde.callsAnotherFunction(callback);
			expect(callback).toHaveBeenCalled();
			expect(callback).toHaveBeenCalledWith(5, true);
		});

		it('calls the callback twice', function() {
		    var callback = jasmine.createSpy('Horst');
			this.xdde.callsAnotherFunction(callback);
			expect(callback).toHaveBeenCalledTimes(2);
		});
	});

	describe('time based functions', function() {
		beforeEach(function() {
			jasmine.clock().install();
		});

		afterEach(function() {
			jasmine.clock().uninstall();
		});

		describe('callsAnotherFunctionDelayed', function() {
			it('calls the callback', function() {
				var callback = jasmine.createSpy('delayed callback');
				this.xdde.callsAnotherFunctionDelayed(callback);
				jasmine.clock().tick(5000);
				expect(callback).toHaveBeenCalled();

			});
		});

		describe('callsAnotherFunctionWithInterval', function() {
			it('calls the callback multiple times', function() {
				var callback = jasmine.createSpy('intervalled callback');
				this.xdde.callsAnotherFunctionWithInterval(callback);
				jasmine.clock().tick(10000);
				expect(callback).toHaveBeenCalledTimes(2);
			});
		});
	});

	describe('callsWindowAlert', function() {
	    it('calls the window.alert function', function() {
			spyOn(window, 'alert');
	        this.xdde.callsWindowAlert(window, 'fehler!');
			expect(window.alert).toHaveBeenCalled();
	    });
		
		it('calls the alert function of the passed object', function() {
		    var windowMock = jasmine.createSpyObj('window', ['alert'])
			this.xdde.callsWindowAlert(windowMock, 'alert');
			expect(windowMock.alert).toHaveBeenCalled();
		});
	});

	describe('usesMathRandom', function() {
	    it('multiplies with Math.random', function() {
	        spyOn(Math, 'random').and.returnValue(13);
			var actual = this.xdde.usesMathRandom(2);
			expect(actual).toEqual(26);
	    });
	});

});