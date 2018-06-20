"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('client/app', ['exports', 'ember', 'client/resolver', 'ember-load-initializers', 'client/config/environment'], function (exports, _ember, _clientResolver, _emberLoadInitializers, _clientConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _clientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _clientConfigEnvironment['default'].podModulePrefix,
    Resolver: _clientResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _clientConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('client/components/primary-view', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    picking: 0,
    picks: _ember['default'].Object.create({
      'p1': _ember['default'].Object.create({ name: '' }),
      'p2': _ember['default'].Object.create({ name: '' }),
      'p3': _ember['default'].Object.create({ name: '' }),
      'p4': _ember['default'].Object.create({ name: '' }),
      'p5': _ember['default'].Object.create({ name: '' })
    }),
    tags: _ember['default'].Object.create({
      good: [],
      bad: []
    }),
    search: '',
    results: false,
    allPicked: _ember['default'].computed('picks.p1', 'picks.p2', 'picks.p3', 'picks.p4', 'picks.p5', function () {
      var picks = this.get('picks');
      var result = !!picks.p1.name && !!picks.p2.name && !!picks.p3.name && !!picks.p4.name && !!picks.p5.name;
      return result;
    }),
    isLoading: false,
    isBootstrapped: false,
    /**
     * Dataset. Last generated 05/18/25.
     *
     * Algorithm Weights Schema:
     * 1-5
     *
     * role: top, mid, jungle, support, adc
     * attribute: cc, initiation, dps, burst, tank, clear, protect, peel, magicDMG, physicalDMG, trueDMG, wr
     * 45-48wr = 1, 48-49.99 = 2, 50-51=3, 51-52=4, 53+=5
     *
     * algorithm:
     * 1. try to get one champion with a 5 in every role
     * 2. max WR as high as possible
     * 3. split physicalDMG / magicalDMG / trueDMG 45/45/10
     * 4. Shoot for 15 total tank
     * 5. Shoot for 10 total initiation
     * 6.
     */
    champions: {
      "Jax": {
        "id": 24,
        "key": "Jax",
        "name": "Jax",
        "title": "Grandmaster at Arms",
        "weights": {
          // role
          "top": 5,
          "jungle": 5,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 4,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Sona": {
        "id": 37,
        "key": "Sona",
        "name": "Sona",
        "title": "Maven of the Strings",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 3,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 1,
          "dps": 1,
          "burst": 1,
          "tank": 1,
          "clear": 1,
          "protect": 5,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Tristana": {
        "id": 18,
        "key": "Tristana",
        "name": "Tristana",
        "title": "the Yordle Gunner",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 3,
          "tank": 1,
          "clear": 5,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Varus": {
        "id": 110,
        "key": "Varus",
        "name": "Varus",
        "title": "the Arrow of Retribution",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 2,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 5,
          "burst": 3,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Kaisa": {
        "id": 145,
        "key": "Kaisa",
        "name": "Kai'Sa",
        "title": "Daughter of the Void",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 2,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 2,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Fiora": {
        "id": 114,
        "key": "Fiora",
        "name": "Fiora",
        "title": "the Grand Duelist",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 3,
          "wr": 3
        }
      },
      "Singed": {
        "id": 27,
        "key": "Singed",
        "name": "Singed",
        "title": "the Mad Chemist",
        "weights": {
          // role
          "top": 4,
          "jungle": 2,
          "mid": 2,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 2,
          "burst": 1,
          "tank": 4,
          "clear": 3,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "TahmKench": {
        "id": 223,
        "key": "TahmKench",
        "name": "Tahm Kench",
        "title": "the River King",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 2,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 3,
          "dps": 2,
          "burst": 3,
          "tank": 3,
          "clear": 1,
          "protect": 3,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Leblanc": {
        "id": 7,
        "key": "Leblanc",
        "name": "LeBlanc",
        "title": "the Deceiver",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 5,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 1,
          "burst": 5,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Thresh": {
        "id": 412,
        "key": "Thresh",
        "name": "Thresh",
        "title": "the Chain Warden",
        "weights": {
          // role
          "top": 1,
          "jungle": 2,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 4,
          "dps": 1,
          "burst": 2,
          "tank": 5,
          "clear": 1,
          "protect": 5,
          "peel": 5,
          "magicDMG": 1,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Karma": {
        "id": 43,
        "key": "Karma",
        "name": "Karma",
        "title": "the Enlightened One",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 4,
          "support": 4,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 2,
          "burst": 3,
          "tank": 2,
          "clear": 2,
          "protect": 3,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Jhin": {
        "id": 202,
        "key": "Jhin",
        "name": "Jhin",
        "title": "the Virtuoso",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 4,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Rumble": {
        "id": 68,
        "key": "Rumble",
        "name": "Rumble",
        "title": "the Mechanized Menace",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 3,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Udyr": {
        "id": 77,
        "key": "Udyr",
        "name": "Udyr",
        "title": "the Spirit Walker",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 2,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "LeeSin": {
        "id": 64,
        "key": "LeeSin",
        "name": "Lee Sin",
        "title": "the Blind Monk",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 5,
          "dps": 2,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 4,
          "magicDMG": 2,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Yorick": {
        "id": 83,
        "key": "Yorick",
        "name": "Yorick",
        "title": "Shepherd of Souls",
        "weights": {
          // role
          "top": 5,
          "jungle": 3,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 1,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Ornn": {
        "id": 516,
        "key": "Ornn",
        "name": "Ornn",
        "title": "The Fire below the Mountain",
        "weights": {
          // role
          "top": 5,
          "jungle": 2,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 2,
          "protect": 3,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Kayn": {
        "id": 141,
        "key": "Kayn",
        "name": "Kayn",
        "title": "the Shadow Reaper",
        "weights": {
          // role
          "top": 3,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 4,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Kassadin": {
        "id": 38,
        "key": "Kassadin",
        "name": "Kassadin",
        "title": "the Void Walker",
        "weights": {
          // role
          "top": 4,
          "jungle": 3,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 1,
          "burst": 4,
          "tank": 2,
          "clear": 1,
          "protect": 1,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Sivir": {
        "id": 15,
        "key": "Sivir",
        "name": "Sivir",
        "title": "the Battle Mistress",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 2,
          "adc": 5,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 5,
          "burst": 3,
          "tank": 2,
          "clear": 5,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "MissFortune": {
        "id": 21,
        "key": "MissFortune",
        "name": "Miss Fortune",
        "title": "the Bounty Hunter",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 3,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 4,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Draven": {
        "id": 119,
        "key": "Draven",
        "name": "Draven",
        "title": "the Glorious Executioner",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 5,
          "tank": 2,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Yasuo": {
        "id": 157,
        "key": "Yasuo",
        "name": "Yasuo",
        "title": "the Unforgiven",
        "weights": {
          // role
          "top": 3,
          "jungle": 3,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 4,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Kayle": {
        "id": 10,
        "key": "Kayle",
        "name": "Kayle",
        "title": "The Judicator",
        "weights": {
          // role
          "top": 4,
          "jungle": 3,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 5,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Shaco": {
        "id": 35,
        "key": "Shaco",
        "name": "Shaco",
        "title": "the Demon Jester",
        "weights": {
          // role
          "top": 1,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 4,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Renekton": {
        "id": 58,
        "key": "Renekton",
        "name": "Renekton",
        "title": "the Butcher of the Sands",
        "weights": {
          // role
          "top": 5,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 5,
          "dps": 3,
          "burst": 4,
          "tank": 4,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Hecarim": {
        "id": 120,
        "key": "Hecarim",
        "name": "Hecarim",
        "title": "the Shadow of War",
        "weights": {
          // role
          "top": 1,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 3,
          "wr": 3
        }
      },
      "Fizz": {
        "id": 105,
        "key": "Fizz",
        "name": "Fizz",
        "title": "the Tidal Trickster",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 2,
          "burst": 4,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 3,
          "magicDMG": 5,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "KogMaw": {
        "id": 96,
        "key": "KogMaw",
        "name": "Kog'Maw",
        "title": "the Mouth of the Abyss",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 5,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 5,
          "trueDMG": 3,
          "wr": 4
        }
      },
      "Maokai": {
        "id": 57,
        "key": "Maokai",
        "name": "Maokai",
        "title": "the Twisted Treant",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 2,
          "burst": 2,
          "tank": 4,
          "clear": 1,
          "protect": 4,
          "peel": 4,
          "magicDMG": 2,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Lissandra": {
        "id": 127,
        "key": "Lissandra",
        "name": "Lissandra",
        "title": "the Ice Witch",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 1,
          "burst": 5,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Jinx": {
        "id": 222,
        "key": "Jinx",
        "name": "Jinx",
        "title": "the Loose Cannon",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 5,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Urgot": {
        "id": 6,
        "key": "Urgot",
        "name": "Urgot",
        "title": "the Dreadnought",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 2,
          "burst": 2,
          "tank": 4,
          "clear": 2,
          "protect": 4,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Fiddlesticks": {
        "id": 9,
        "key": "Fiddlesticks",
        "name": "Fiddlesticks",
        "title": "the Harbinger of Doom",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 1,
          "burst": 5,
          "tank": 2,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Galio": {
        "id": 3,
        "key": "Galio",
        "name": "Galio",
        "title": "the Colossus",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 2,
          "burst": 4,
          "tank": 5,
          "clear": 2,
          "protect": 2,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Pantheon": {
        "id": 80,
        "key": "Pantheon",
        "name": "Pantheon",
        "title": "the Artisan of War",
        "weights": {
          // role
          "top": 4,
          "jungle": 3,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 2,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 4,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Talon": {
        "id": 91,
        "key": "Talon",
        "name": "Talon",
        "title": "the Blade's Shadow",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 2,
          "burst": 5,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 2,
          "wr": 5
        }
      },
      "Gangplank": {
        "id": 41,
        "key": "Gangplank",
        "name": "Gangplank",
        "title": "the Saltwater Scourge",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 2,
          "wr": 3
        }
      },
      "Ezreal": {
        "id": 81,
        "key": "Ezreal",
        "name": "Ezreal",
        "title": "the Prodigal Explorer",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Gnar": {
        "id": 150,
        "key": "Gnar",
        "name": "Gnar",
        "title": "the Missing Link",
        "weights": {
          // role
          "top": 5,
          "jungle": 2,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Teemo": {
        "id": 17,
        "key": "Teemo",
        "name": "Teemo",
        "title": "the Swift Scout",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 2,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 3,
          "burst": 3,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Annie": {
        "id": 1,
        "key": "Annie",
        "name": "Annie",
        "title": "the Dark Child",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 3,
          "dps": 1,
          "burst": 5,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Mordekaiser": {
        "id": 82,
        "key": "Mordekaiser",
        "name": "Mordekaiser",
        "title": "the Iron Revenant",
        "weights": {
          // role
          "top": 5,
          "jungle": 1,
          "mid": 3,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Azir": {
        "id": 268,
        "key": "Azir",
        "name": "Azir",
        "title": "the Emperor of the Sands",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Kennen": {
        "id": 85,
        "key": "Kennen",
        "name": "Kennen",
        "title": "the Heart of the Tempest",
        "weights": {
          // role
          "top": 3,
          "jungle": 2,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Riven": {
        "id": 92,
        "key": "Riven",
        "name": "Riven",
        "title": "the Exile",
        "weights": {
          // role
          "top": 5,
          "jungle": 3,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 2,
          "protect": 1,
          "peel": 3,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Chogath": {
        "id": 31,
        "key": "Chogath",
        "name": "Cho'Gath",
        "title": "the Terror of the Void",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 2,
          "burst": 3,
          "tank": 5,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 4,
          "wr": 5
        }
      },
      "Aatrox": {
        "id": 266,
        "key": "Aatrox",
        "name": "Aatrox",
        "title": "the Darkin Blade",
        "weights": {
          // role
          "top": 3,
          "jungle": 3,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 4,
          "burst": 3,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Poppy": {
        "id": 78,
        "key": "Poppy",
        "name": "Poppy",
        "title": "Keeper of the Hammer",
        "weights": {
          // role
          "top": 4,
          "jungle": 3,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 2,
          "burst": 3,
          "tank": 3,
          "clear": 1,
          "protect": 1,
          "peel": 4,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Taliyah": {
        "id": 163,
        "key": "Taliyah",
        "name": "Taliyah",
        "title": "the Stoneweaver",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 3,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 2,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Illaoi": {
        "id": 420,
        "key": "Illaoi",
        "name": "Illaoi",
        "title": "the Kraken Priestess",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Heimerdinger": {
        "id": 74,
        "key": "Heimerdinger",
        "name": "Heimerdinger",
        "title": "the Revered Inventor",
        "weights": {
          // role
          "top": 5,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 4,
          "burst": 3,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Alistar": {
        "id": 12,
        "key": "Alistar",
        "name": "Alistar",
        "title": "the Minotaur",
        "weights": {
          // role
          "top": 2,
          "jungle": 2,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 1,
          "burst": 1,
          "tank": 5,
          "clear": 1,
          "protect": 3,
          "peel": 5,
          "magicDMG": 2,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "XinZhao": {
        "id": 5,
        "key": "XinZhao",
        "name": "Xin Zhao",
        "title": "the Seneschal of Demacia",
        "weights": {
          // role
          "top": 5,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 4,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 3,
          "peel": 3,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Lucian": {
        "id": 236,
        "key": "Lucian",
        "name": "Lucian",
        "title": "the Purifier",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Volibear": {
        "id": 106,
        "key": "Volibear",
        "name": "Volibear",
        "title": "the Thunder's Roar",
        "weights": {
          // role
          "top": 3,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 3,
          "burst": 3,
          "tank": 5,
          "clear": 3,
          "protect": 1,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Sejuani": {
        "id": 113,
        "key": "Sejuani",
        "name": "Sejuani",
        "title": "Fury of the North",
        "weights": {
          // role
          "top": 3,
          "jungle": 3,
          "mid": 1,
          "support": 4,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 3,
          "burst": 2,
          "tank": 5,
          "clear": 2,
          "protect": 1,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Nidalee": {
        "id": 76,
        "key": "Nidalee",
        "name": "Nidalee",
        "title": "the Bestial Huntress",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 3,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 2,
          "burst": 3,
          "tank": 1,
          "clear": 1,
          "protect": 1,
          "peel": 1,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Garen": {
        "id": 86,
        "key": "Garen",
        "name": "Garen",
        "title": "The Might of Demacia",
        "weights": {
          // role
          "top": 5,
          "jungle": 2,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 3,
          "dps": 4,
          "burst": 4,
          "tank": 4,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 2,
          "wr": 5
        }
      },
      "Leona": {
        "id": 89,
        "key": "Leona",
        "name": "Leona",
        "title": "the Radiant Dawn",
        "weights": {
          // role
          "top": 1,
          "jungle": 2,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 1,
          "burst": 3,
          "tank": 5,
          "clear": 3,
          "protect": 3,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Zed": {
        "id": 238,
        "key": "Zed",
        "name": "Zed",
        "title": "the Master of Shadows",
        "weights": {
          // role
          "top": 3,
          "jungle": 2,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 3,
          "dps": 2,
          "burst": 5,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Blitzcrank": {
        "id": 53,
        "key": "Blitzcrank",
        "name": "Blitzcrank",
        "title": "the Great Steam Golem",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 1,
          "burst": 3,
          "tank": 5,
          "clear": 1,
          "protect": 3,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Rammus": {
        "id": 33,
        "key": "Rammus",
        "name": "Rammus",
        "title": "the Armordillo",
        "weights": {
          // role
          "top": 1,
          "jungle": 5,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 3,
          "burst": 3,
          "tank": 5,
          "clear": 3,
          "protect": 5,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Velkoz": {
        "id": 161,
        "key": "Velkoz",
        "name": "Vel'Koz",
        "title": "the Eye of the Void",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 2,
          "wr": 4
        }
      },
      "Caitlyn": {
        "id": 51,
        "key": "Caitlyn",
        "name": "Caitlyn",
        "title": "the Sheriff of Piltover",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 1,
          "dps": 5,
          "burst": 4,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Trundle": {
        "id": 48,
        "key": "Trundle",
        "name": "Trundle",
        "title": "the Troll King",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 4,
          "burst": 4,
          "tank": 4,
          "clear": 2,
          "protect": 2,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Kindred": {
        "id": 203,
        "key": "Kindred",
        "name": "Kindred",
        "title": "The Eternal Hunters",
        "weights": {
          // role
          "top": 1,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 4,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Quinn": {
        "id": 133,
        "key": "Quinn",
        "name": "Quinn",
        "title": "Demacia's Wings",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 1,
          "initiation": 3,
          "dps": 5,
          "burst": 4,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Ekko": {
        "id": 245,
        "key": "Ekko",
        "name": "Ekko",
        "title": "the Boy Who Shattered Time",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 3,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 2,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Nami": {
        "id": 267,
        "key": "Nami",
        "name": "Nami",
        "title": "the Tidecaller",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 1,
          "burst": 1,
          "tank": 2,
          "clear": 1,
          "protect": 1,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Swain": {
        "id": 50,
        "key": "Swain",
        "name": "Swain",
        "title": "the Noxian Grand General",
        "weights": {
          // role
          "top": 4,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 2,
          "dps": 4,
          "burst": 1,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Taric": {
        "id": 44,
        "key": "Taric",
        "name": "Taric",
        "title": "the Shield of Valoran",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 1,
          "burst": 4,
          "tank": 4,
          "clear": 2,
          "protect": 4,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Syndra": {
        "id": 134,
        "key": "Syndra",
        "name": "Syndra",
        "title": "the Dark Sovereign",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 2,
          "burst": 4,
          "tank": 2,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 2,
          "wr": 1
        }
      },
      "Rakan": {
        "id": 497,
        "key": "Rakan",
        "name": "Rakan",
        "title": "The Charmer",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 1,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Skarner": {
        "id": 72,
        "key": "Skarner",
        "name": "Skarner",
        "title": "the Crystal Vanguard",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 3,
          "burst": 1,
          "tank": 5,
          "clear": 3,
          "protect": 4,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Braum": {
        "id": 201,
        "key": "Braum",
        "name": "Braum",
        "title": "the Heart of the Freljord",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 1,
          "burst": 3,
          "tank": 5,
          "clear": 1,
          "protect": 5,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Veigar": {
        "id": 45,
        "key": "Veigar",
        "name": "Veigar",
        "title": "the Tiny Master of Evil",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 3,
          "burst": 5,
          "tank": 1,
          "clear": 5,
          "protect": 2,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Xerath": {
        "id": 101,
        "key": "Xerath",
        "name": "Xerath",
        "title": "the Magus Ascendant",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 5,
          "tank": 1,
          "clear": 5,
          "protect": 2,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Corki": {
        "id": 42,
        "key": "Corki",
        "name": "Corki",
        "title": "the Daring Bombardier",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 5,
          "burst": 3,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 4,
          "trueDMG": 2,
          "wr": 3
        }
      },
      "Nautilus": {
        "id": 111,
        "key": "Nautilus",
        "name": "Nautilus",
        "title": "the Titan of the Depths",
        "weights": {
          // role
          "top": 3,
          "jungle": 3,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 4,
          "burst": 2,
          "tank": 4,
          "clear": 3,
          "protect": 3,
          "peel": 3,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Ahri": {
        "id": 103,
        "key": "Ahri",
        "name": "Ahri",
        "title": "the Nine-Tailed Fox",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 1,
          "burst": 4,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 3,
          "wr": 4
        }
      },
      "Jayce": {
        "id": 126,
        "key": "Jayce",
        "name": "Jayce",
        "title": "the Defender of Tomorrow",
        "weights": {
          // role
          "top": 5,
          "jungle": 3,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 2,
          "burst": 4,
          "tank": 4,
          "clear": 2,
          "protect": 2,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Darius": {
        "id": 122,
        "key": "Darius",
        "name": "Darius",
        "title": "the Hand of Noxus",
        "weights": {
          // role
          "top": 5,
          "jungle": 3,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 1,
          "burst": 4,
          "tank": 4,
          "clear": 1,
          "protect": 2,
          "peel": 3,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 3,
          "wr": 3
        }
      },
      "Tryndamere": {
        "id": 23,
        "key": "Tryndamere",
        "name": "Tryndamere",
        "title": "the Barbarian King",
        "weights": {
          // role
          "top": 5,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 5,
          "burst": 5,
          "tank": 2,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Janna": {
        "id": 40,
        "key": "Janna",
        "name": "Janna",
        "title": "the Storm's Fury",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 3,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 2,
          "dps": 1,
          "burst": 2,
          "tank": 2,
          "clear": 2,
          "protect": 5,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Elise": {
        "id": 60,
        "key": "Elise",
        "name": "Elise",
        "title": "the Spider Queen",
        "weights": {
          // role
          "top": 2,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 3,
          "dps": 3,
          "burst": 4,
          "tank": 2,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Vayne": {
        "id": 67,
        "key": "Vayne",
        "name": "Vayne",
        "title": "the Night Hunter",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 5,
          "burst": 4,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 3,
          "wr": 3
        }
      },
      "Brand": {
        "id": 63,
        "key": "Brand",
        "name": "Brand",
        "title": "the Burning Vengeance",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 2,
          "burst": 4,
          "tank": 1,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Zoe": {
        "id": 142,
        "key": "Zoe",
        "name": "Zoe",
        "title": "the Aspect of Twilight",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 4,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 2,
          "wr": 1
        }
      },
      "Graves": {
        "id": 104,
        "key": "Graves",
        "name": "Graves",
        "title": "the Outlaw",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 3,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 4,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Soraka": {
        "id": 16,
        "key": "Soraka",
        "name": "Soraka",
        "title": "the Starchild",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 3,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 1,
          "burst": 2,
          "tank": 2,
          "clear": 2,
          "protect": 5,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Xayah": {
        "id": 498,
        "key": "Xayah",
        "name": "Xayah",
        "title": "the Rebel",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 4,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 4,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Karthus": {
        "id": 30,
        "key": "Karthus",
        "name": "Karthus",
        "title": "the Deathsinger",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 4,
          "burst": 4,
          "tank": 2,
          "clear": 5,
          "protect": 2,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Vladimir": {
        "id": 8,
        "key": "Vladimir",
        "name": "Vladimir",
        "title": "the Crimson Reaper",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Zilean": {
        "id": 26,
        "key": "Zilean",
        "name": "Zilean",
        "title": "the Chronokeeper",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 2,
          "burst": 4,
          "tank": 1,
          "clear": 4,
          "protect": 5,
          "peel": 5,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Katarina": {
        "id": 55,
        "key": "Katarina",
        "name": "Katarina",
        "title": "the Sinister Blade",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 3,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 4,
          "dps": 2,
          "burst": 5,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 1,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Shyvana": {
        "id": 102,
        "key": "Shyvana",
        "name": "Shyvana",
        "title": "the Half-Dragon",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 5,
          "dps": 4,
          "burst": 3,
          "tank": 5,
          "clear": 5,
          "protect": 2,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Warwick": {
        "id": 19,
        "key": "Warwick",
        "name": "Warwick",
        "title": "the Uncaged Wrath of Zaun",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 4,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 3,
          "peel": 4,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Ziggs": {
        "id": 115,
        "key": "Ziggs",
        "name": "Ziggs",
        "title": "the Hexplosives Expert",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 2,
          "burst": 5,
          "tank": 1,
          "clear": 5,
          "protect": 1,
          "peel": 2,
          "magicDMG": 5,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Kled": {
        "id": 240,
        "key": "Kled",
        "name": "Kled",
        "title": "the Cantankerous Cavalier",
        "weights": {
          // role
          "top": 5,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 4,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Khazix": {
        "id": 121,
        "key": "Khazix",
        "name": "Kha'Zix",
        "title": "the Voidreaver",
        "weights": {
          // role
          "top": 3,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 5,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 3,
          "physicalDMG": 4,
          "trueDMG": 2,
          "wr": 4
        }
      },
      "Olaf": {
        "id": 2,
        "key": "Olaf",
        "name": "Olaf",
        "title": "the Berserker",
        "weights": {
          // role
          "top": 3,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 4,
          "burst": 2,
          "tank": 4,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 3,
          "wr": 1
        }
      },
      "TwistedFate": {
        "id": 4,
        "key": "TwistedFate",
        "name": "Twisted Fate",
        "title": "the Card Master",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 4,
          "protect": 1,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Nunu": {
        "id": 20,
        "key": "Nunu",
        "name": "Nunu",
        "title": "the Yeti Rider",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 1,
          "burst": 4,
          "tank": 4,
          "clear": 1,
          "protect": 3,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Rengar": {
        "id": 107,
        "key": "Rengar",
        "name": "Rengar",
        "title": "the Pridestalker",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 4,
          "burst": 4,
          "tank": 4,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 2,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Bard": {
        "id": 432,
        "key": "Bard",
        "name": "Bard",
        "title": "the Wandering Caretaker",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 4,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 5,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Irelia": {
        "id": 39,
        "key": "Irelia",
        "name": "Irelia",
        "title": "the Blade Dancer",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 3,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 5,
          "dps": 4,
          "burst": 4,
          "tank": 4,
          "clear": 4,
          "protect": 2,
          "peel": 3,
          "magicDMG": 3,
          "physicalDMG": 3,
          "trueDMG": 3,
          "wr": 5
        }
      },
      "Ivern": {
        "id": 427,
        "key": "Ivern",
        "name": "Ivern",
        "title": "the Green Father",
        "weights": {
          // role
          "top": 1,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 2,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 2,
          "wr": 3
        }
      },
      "MonkeyKing": {
        "id": 62,
        "key": "MonkeyKing",
        "name": "Wukong",
        "title": "the Monkey King",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 2,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 5,
          "dps": 4,
          "burst": 4,
          "tank": 5,
          "clear": 3,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Ashe": {
        "id": 22,
        "key": "Ashe",
        "name": "Ashe",
        "title": "the Frost Archer",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 2,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 5,
          "initiation": 2,
          "dps": 4,
          "burst": 1,
          "tank": 1,
          "clear": 1,
          "protect": 4,
          "peel": 4,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Kalista": {
        "id": 429,
        "key": "Kalista",
        "name": "Kalista",
        "title": "the Spear of Vengeance",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 1,
          "adc": 4,
          // attribute
          "cc": 1,
          "initiation": 1,
          "dps": 4,
          "burst": 3,
          "tank": 1,
          "clear": 2,
          "protect": 1,
          "peel": 1,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Akali": {
        "id": 84,
        "key": "Akali",
        "name": "Akali",
        "title": "the Fist of Shadow",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 4,
          "dps": 3,
          "burst": 5,
          "tank": 2,
          "clear": 4,
          "protect": 1,
          "peel": 3,
          "magicDMG": 5,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Vi": {
        "id": 254,
        "key": "Vi",
        "name": "Vi",
        "title": "the Piltover Enforcer",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 4,
          "burst": 3,
          "tank": 4,
          "clear": 2,
          "protect": 2,
          "peel": 4,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Amumu": {
        "id": 32,
        "key": "Amumu",
        "name": "Amumu",
        "title": "the Sad Mummy",
        "weights": {
          // role
          "top": 1,
          "jungle": 5,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 2,
          "burst": 3,
          "tank": 5,
          "clear": 3,
          "protect": 3,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 2,
          "wr": 5
        }
      },
      "Lulu": {
        "id": 117,
        "key": "Lulu",
        "name": "Lulu",
        "title": "the Fae Sorceress",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 2,
          "burst": 3,
          "tank": 3,
          "clear": 1,
          "protect": 5,
          "peel": 5,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Morgana": {
        "id": 25,
        "key": "Morgana",
        "name": "Morgana",
        "title": "Fallen Angel",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 3,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 2,
          "dps": 1,
          "burst": 4,
          "tank": 4,
          "clear": 3,
          "protect": 5,
          "peel": 5,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Nocturne": {
        "id": 56,
        "key": "Nocturne",
        "name": "Nocturne",
        "title": "the Eternal Nightmare",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 5,
          "dps": 4,
          "burst": 3,
          "tank": 4,
          "clear": 4,
          "protect": 2,
          "peel": 4,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Diana": {
        "id": 131,
        "key": "Diana",
        "name": "Diana",
        "title": "Scorn of the Moon",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 5,
          "tank": 4,
          "clear": 2,
          "protect": 1,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "AurelionSol": {
        "id": 136,
        "key": "AurelionSol",
        "name": "Aurelion Sol",
        "title": "The Star Forger",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 3,
          "burst": 5,
          "tank": 4,
          "clear": 4,
          "protect": 1,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Zyra": {
        "id": 143,
        "key": "Zyra",
        "name": "Zyra",
        "title": "Rise of the Thorns",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 1,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 1,
          "dps": 3,
          "burst": 3,
          "tank": 1,
          "clear": 1,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Viktor": {
        "id": 112,
        "key": "Viktor",
        "name": "Viktor",
        "title": "the Machine Herald",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 4,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 1,
          "burst": 4,
          "tank": 3,
          "clear": 4,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Cassiopeia": {
        "id": 69,
        "key": "Cassiopeia",
        "name": "Cassiopeia",
        "title": "the Serpent's Embrace",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 1,
          "clear": 1,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Nasus": {
        "id": 75,
        "key": "Nasus",
        "name": "Nasus",
        "title": "the Curator of the Sands",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 4,
          "tank": 5,
          "clear": 2,
          "protect": 4,
          "peel": 4,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Twitch": {
        "id": 29,
        "key": "Twitch",
        "name": "Twitch",
        "title": "the Plague Rat",
        "weights": {
          // role
          "top": 2,
          "jungle": 5,
          "mid": 2,
          "support": 1,
          "adc": 5,
          // attribute
          "cc": 2,
          "initiation": 2,
          "dps": 5,
          "burst": 5,
          "tank": 1,
          "clear": 5,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 2,
          "wr": 5
        }
      },
      "DrMundo": {
        "id": 36,
        "key": "DrMundo",
        "name": "Dr. Mundo",
        "title": "the Madman of Zaun",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 4,
          "dps": 4,
          "burst": 3,
          "tank": 5,
          "clear": 5,
          "protect": 3,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Orianna": {
        "id": 61,
        "key": "Orianna",
        "name": "Orianna",
        "title": "the Lady of Clockwork",
        "weights": {
          // role
          "top": 3,
          "jungle": 1,
          "mid": 5,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 2,
          "dps": 3,
          "burst": 4,
          "tank": 3,
          "clear": 4,
          "protect": 4,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Evelynn": {
        "id": 28,
        "key": "Evelynn",
        "name": "Evelynn",
        "title": "Agony's Embrace",
        "weights": {
          // role
          "top": 2,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 2,
          "initiation": 3,
          "dps": 3,
          "burst": 4,
          "tank": 2,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "RekSai": {
        "id": 421,
        "key": "RekSai",
        "name": "Rek'Sai",
        "title": "the Void Burrower",
        "weights": {
          // role
          "top": 3,
          "jungle": 4,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 3,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 4,
          "trueDMG": 2,
          "wr": 3
        }
      },
      "Lux": {
        "id": 99,
        "key": "Lux",
        "name": "Lux",
        "title": "the Lady of Luminosity",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 5,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 1,
          "dps": 1,
          "burst": 5,
          "tank": 1,
          "clear": 4,
          "protect": 5,
          "peel": 4,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Sion": {
        "id": 14,
        "key": "Sion",
        "name": "Sion",
        "title": "The Undead Juggernaut",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 3,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 2,
          "physicalDMG": 4,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "Camille": {
        "id": 164,
        "key": "Camille",
        "name": "Camille",
        "title": "the Steel Shadow",
        "weights": {
          // role
          "top": 5,
          "jungle": 3,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 4,
          "burst": 3,
          "tank": 4,
          "clear": 3,
          "protect": 2,
          "peel": 2,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 3,
          "wr": 4
        }
      },
      "MasterYi": {
        "id": 11,
        "key": "MasterYi",
        "name": "Master Yi",
        "title": "the Wuju Bladesman",
        "weights": {
          // role
          "top": 3,
          "jungle": 5,
          "mid": 1,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 1,
          "initiation": 4,
          "dps": 5,
          "burst": 5,
          "tank": 1,
          "clear": 5,
          "protect": 1,
          "peel": 1,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 3,
          "wr": 4
        }
      },
      "Ryze": {
        "id": 13,
        "key": "Ryze",
        "name": "Ryze",
        "title": "the Rune Mage",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 3,
          "burst": 4,
          "tank": 3,
          "clear": 3,
          "protect": 1,
          "peel": 3,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 3
        }
      },
      "Malphite": {
        "id": 54,
        "key": "Malphite",
        "name": "Malphite",
        "title": "Shard of the Monolith",
        "weights": {
          // role
          "top": 4,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 5,
          "dps": 1,
          "burst": 4,
          "tank": 5,
          "clear": 1,
          "protect": 3,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 4
        }
      },
      "Anivia": {
        "id": 34,
        "key": "Anivia",
        "name": "Anivia",
        "title": "the Cryophoenix",
        "weights": {
          // role
          "top": 1,
          "jungle": 1,
          "mid": 5,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 5,
          "initiation": 1,
          "dps": 4,
          "burst": 4,
          "tank": 3,
          "clear": 4,
          "protect": 2,
          "peel": 3,
          "magicDMG": 5,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Shen": {
        "id": 98,
        "key": "Shen",
        "name": "Shen",
        "title": "the Eye of Twilight",
        "weights": {
          // role
          "top": 4,
          "jungle": 2,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 4,
          "dps": 1,
          "burst": 3,
          "tank": 4,
          "clear": 1,
          "protect": 5,
          "peel": 5,
          "magicDMG": 3,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 2
        }
      },
      "JarvanIV": {
        "id": 59,
        "key": "JarvanIV",
        "name": "Jarvan IV",
        "title": "the Exemplar of Demacia",
        "weights": {
          // role
          "top": 5,
          "jungle": 4,
          "mid": 1,
          "support": 4,
          "adc": 1,
          // attribute
          "cc": 4,
          "initiation": 5,
          "dps": 3,
          "burst": 3,
          "tank": 5,
          "clear": 2,
          "protect": 4,
          "peel": 4,
          "magicDMG": 1,
          "physicalDMG": 5,
          "trueDMG": 1,
          "wr": 5
        }
      },
      "Malzahar": {
        "id": 90,
        "key": "Malzahar",
        "name": "Malzahar",
        "title": "the Prophet of the Void",
        "weights": {
          // role
          "top": 2,
          "jungle": 1,
          "mid": 4,
          "support": 1,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 1,
          "dps": 2,
          "burst": 4,
          "tank": 1,
          "clear": 3,
          "protect": 1,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 1,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Zac": {
        "id": 154,
        "key": "Zac",
        "name": "Zac",
        "title": "the Secret Weapon",
        "weights": {
          // role
          "top": 2,
          "jungle": 4,
          "mid": 1,
          "support": 2,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 5,
          "dps": 2,
          "burst": 2,
          "tank": 5,
          "clear": 1,
          "protect": 2,
          "peel": 2,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Gragas": {
        "id": 79,
        "key": "Gragas",
        "name": "Gragas",
        "title": "the Rabble Rouser",
        "weights": {
          // role
          "top": 1,
          "jungle": 4,
          "mid": 1,
          "support": 3,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 2,
          "dps": 1,
          "burst": 3,
          "tank": 3,
          "clear": 1,
          "protect": 2,
          "peel": 4,
          "magicDMG": 4,
          "physicalDMG": 2,
          "trueDMG": 1,
          "wr": 1
        }
      },
      "Pyke": {
        "id": 500,
        "key": "Pyke",
        "name": "Pyke",
        "title": "the Bloodharbor Ripper",
        "weights": {
          // role
          "top": 1,
          "jungle": 3,
          "mid": 1,
          "support": 4,
          "adc": 1,
          // attribute
          "cc": 3,
          "initiation": 4,
          "dps": 1,
          "burst": 3,
          "tank": 2,
          "clear": 1,
          "protect": 2,
          "peel": 4,
          "magicDMG": 1,
          "physicalDMG": 3,
          "trueDMG": 3,
          "wr": 2
        }
      }
    },
    filteredChampions: _ember['default'].computed('search', function () {
      var search = this.get('search');
      var champions = this.get('champions');
      var filtered = [];

      Object.keys(champions).forEach(function (key) {
        if (key.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          filtered.push(champions[key]);
        }
      });
      return new _ember['default'].A(filtered);
    }),

    score: _ember['default'].computed('picks.p1', 'picks.p2', 'picks.p3', 'picks.p4', 'picks.p5', function () {
      var picks = this.get('picks');
      var good = [];
      var bad = [];
      var score = 0;
      var pickList = [picks.p1, picks.p2, picks.p3, picks.p4, picks.p5];
      var aggregateScores = {
        // role
        "top": 0,
        "jungle": 0,
        "mid": 0,
        "support": 0,
        "adc": 0,
        // attribute
        "cc": 0,
        "initiation": 0,
        "dps": 0,
        "burst": 0,
        "tank": 0,
        "clear": 0,
        "protect": 0,
        "peel": 0,
        "magicDMG": 0,
        "physicalDMG": 0,
        "trueDMG": 0,
        "wr": 0
      };

      pickList.forEach(function (pick) {
        if (pick.weights) {
          Object.keys(pick.weights).forEach(function (key) {
            aggregateScores[key] += pick.weights[key];
          });
        }
      });

      /*
       * Role was the most important indicator representing
       * 18% delta WR.
       *
       * Scoring: min/max = percent * 3
       * range: 3-15 + 3 for good diversity
       */
      score += aggregateScores.top / 25 * 3;
      score += aggregateScores.jungle / 25 * 3;
      score += aggregateScores.mid / 25 * 3;
      score += aggregateScores.support / 25 * 3;
      score += aggregateScores.adc / 25 * 3;

      /*
       * Teams with excellent diversity gain an additional 3pts.
       * Scoring 8 in each role shows good diversity.
       */
      var totalRoleScore = aggregateScores.top + aggregateScores.jungle + aggregateScores.mid + aggregateScores.support + aggregateScores.adc;
      score += totalRoleScore / (25 * 5) >= 8 * 5 ? 3 : 0;
      if (aggregateScores.top > 7 && aggregateScores.jungle > 7 && aggregateScores.mid > 7 && aggregateScores.support > 7 && aggregateScores.adc > 7) {
        good.push('role diversity');
      } else {
        bad.push('role diversity');
      }

      /*
       * Average champion winrate was the second best indicator of team winrate.
       * It was approx. 16% of the delta wr.
       */
      score += aggregateScores.wr / 25 * 16;

      /*
       * 14% delta wr for tank.
       * Sharp increase if 12 +.
       */
      score += aggregateScores.tank / 25 * 7;
      if (aggregateScores.tank >= 12) {
        score += 7;
      }
      if (aggregateScores.tank >= 12) {
        good.push('team durability');
      } else {
        bad.push('team durability');
      }

      /*
       * 12% delta wr for cc. 6 but doubled if over 10.
       */
      score += aggregateScores.cc / 25 * 6;
      if (aggregateScores.cc >= 10) {
        score += 6;
      }
      if (aggregateScores.cc >= 10) {
        good.push('crowd control');
      } else {
        bad.push('crowd control');
      }

      /*
       * 9% delta wr for dps.
       */
      score += aggregateScores.dps / 25 * 5;
      if (aggregateScores.dps >= 10) {
        score += 4;
      }
      if (aggregateScores.dps >= 10) {
        good.push('sustained damage');
      } else {
        bad.push('sustained damage');
      }

      /*
       * 8% delta wr for burst.
       */
      score += aggregateScores.burst / 25 * 5;
      if (aggregateScores.burst >= 10) {
        score += 3;
      }
      if (aggregateScores.burst >= 10) {
        good.push('burst damage');
      } else {
        bad.push('burst damage');
      }

      /*
       * 7% delta wr for split.
       * 6 for good phys / mag split, an extra pt for having true
       */
      var totalDMG = aggregateScores.magicDMG + aggregateScores.physicalDMG + aggregateScores.trueDMG;
      score += aggregateScores.magicDMG / totalDMG >= 0.35 ? 3 : 0;
      score += aggregateScores.physicalDMG / totalDMG >= 0.35 ? 3 : 0;
      score += aggregateScores.trueDMG >= 6 ? 1 : 0;
      if (aggregateScores.magicDMG >= 10) {
        good.push('magic damage');
      } else {
        bad.push('magic damage');
      }
      if (aggregateScores.physicalDMG >= 10) {
        good.push('physical damage');
      } else {
        bad.push('physical damage');
      }
      if (aggregateScores.trueDMG >= 6) {
        good.push('true damage');
      } else {
        bad.push('true damage');
      }

      /*
       * 6% delta wr for initiation.
       */
      score += aggregateScores.initiation / 25 * 3;
      if (aggregateScores.initiation >= 10) {
        score += 3;
      }
      if (aggregateScores.inititation >= 10) {
        good.push('initiation');
      } else {
        bad.push('inititation');
      }

      /*
        * 5% delta wr for clear.
        */
      score += aggregateScores.clear / 25 * 3;
      if (aggregateScores.clear >= 10) {
        score += 2;
      }
      if (aggregateScores.clear >= 10) {
        good.push('wave clear');
      } else {
        bad.push('wave clear');
      }

      /*
        * 5% delta wr for prot + peel.
        */
      score += (aggregateScores.protect + aggregateScores.peel) / 50 * 3;
      if (aggregateScores.protect + aggregateScores.peel >= 20) {
        score += 2;
      }
      if (aggregateScores.peel >= 10) {
        good.push('peel');
      } else {
        bad.push('peel');
      }

      var percent = score / 100 * 100;

      /*
       * funDecimal just adds some randomness to it all.
       */
      var funDecimal = 0;
      pickList.forEach(function (p) {
        funDecimal += p.id || 1;
      });
      if (funDecimal <= 5) {
        funDecimal = 0;
      }
      funDecimal = String(funDecimal).substring(0, 2);

      // set tags
      this.set('tags.good', good);
      this.set('tags.bad', bad);
      return String(Number(String(Math.floor(percent)) + '.' + funDecimal) * .825).substring(0, 4);
    }),

    getParameterByName: function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

    addMetadata: (function () {
      var champions = this.get('champions');
      var result = {};

      Object.keys(champions).forEach(function (key) {
        var champKey = champions[key].key;
        var champion = champions[key];
        champion.icon = 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/' + champKey + '.png';
        result[key] = champion;
      });

      this.set('picks.p1', champions[this.getParameterByName('p1')] || _ember['default'].Object.create({ name: '' }));
      this.set('picks.p2', champions[this.getParameterByName('p2')] || _ember['default'].Object.create({ name: '' }));
      this.set('picks.p3', champions[this.getParameterByName('p3')] || _ember['default'].Object.create({ name: '' }));
      this.set('picks.p4', champions[this.getParameterByName('p4')] || _ember['default'].Object.create({ name: '' }));
      this.set('picks.p5', champions[this.getParameterByName('p5')] || _ember['default'].Object.create({ name: '' }));
      this.set('isBootstrapped', true);
      this.set('champions', result);
    }).on('init'),

    urlManager: _ember['default'].observer('picks.p1', 'picks.p2', 'picks.p3', 'picks.p4', 'picks.p5', function () {
      if (this.get('isBootstrapped')) {
        var picks = this.get('picks');
        var query = '?p1=' + picks.p1.key + '&p2=' + picks.p2.key + '&p3=' + picks.p3.key + '&p4=' + picks.p4.key + '&p5=' + picks.p5.key;
        window.history.replaceState({}, 'teamcomp', query);
      }
    }),

    currentUrlEncoded: _ember['default'].computed('picks.p1', 'picks.p2', 'picks.p3', 'picks.p4', 'picks.p5', function () {
      return encodeURIComponent('http://team-comp.com' + window.location.href.substring(window.location.origin.length));
    }),
    currentUrl: _ember['default'].computed('picks.p1', 'picks.p2', 'picks.p3', 'picks.p4', 'picks.p5', function () {
      return 'http://team-comp.com' + window.location.href.substring(window.location.origin.length);
    }),

    actions: {
      pick: function pick(number) {
        this.set('picking', number);
      },
      setChampion: function setChampion(number, key) {
        this.set('results', false);
        var pick = 'p' + number;
        var champions = this.get('champions');
        this.get('picks').set(pick, champions[key]);
      },
      getResults: function getResults() {
        var _this = this;

        var rand = Math.floor(Math.random() * (2500 - 200 + 1)) + 200;
        this.set('isLoading', true);
        setTimeout(function () {
          _this.set('results', true);
          _this.set('isLoading', false);
        }, rand);
      }
    }
  });
});
define('client/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _emberTruthHelpersHelpersAnd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersAnd['default'];
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersAnd.and;
    }
  });
});
define('client/helpers/app-version', ['exports', 'ember', 'client/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _clientConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _clientConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('client/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _emberTruthHelpersHelpersEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersEqual['default'];
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersEqual.equal;
    }
  });
});
define('client/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _emberTruthHelpersHelpersGt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersGt['default'];
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersGt.gt;
    }
  });
});
define('client/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _emberTruthHelpersHelpersGte) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersGte['default'];
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersGte.gte;
    }
  });
});
define('client/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _emberTruthHelpersHelpersIsArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsArray['default'];
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsArray.isArray;
    }
  });
});
define('client/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('client/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _emberTruthHelpersHelpersLt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersLt['default'];
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersLt.lt;
    }
  });
});
define('client/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _emberTruthHelpersHelpersLte) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersLte['default'];
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersLte.lte;
    }
  });
});
define('client/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _emberTruthHelpersHelpersNotEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersNotEqual['default'];
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersNotEqual.notEq;
    }
  });
});
define('client/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _emberTruthHelpersHelpersNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersNot.not;
    }
  });
});
define('client/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _emberTruthHelpersHelpersOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersOr['default'];
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersOr.or;
    }
  });
});
define('client/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('client/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('client/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _emberTruthHelpersHelpersXor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersXor['default'];
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersXor.xor;
    }
  });
});
define('client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'client/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _clientConfigEnvironment) {
  var _config$APP = _clientConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('client/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('client/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('client/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('client/initializers/export-application-global', ['exports', 'ember', 'client/config/environment'], function (exports, _ember, _clientConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_clientConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _clientConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_clientConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('client/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('client/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('client/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("client/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('client/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('client/router', ['exports', 'ember', 'client/config/environment'], function (exports, _ember, _clientConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _clientConfigEnvironment['default'].locationType,
    rootURL: _clientConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('league-of-legends');
  });

  exports['default'] = Router;
});
define('client/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('client/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("client/templates/components/primary-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element17 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element17, 'src');
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "picks.p1.icon", ["loc", [null, [11, 35], [11, 48]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "picks.p1.name", ["loc", [null, [12, 10], [12, 27]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "pick-number");
          var el2 = dom.createTextNode("1");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element16 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element16, 'src');
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "picks.p2.icon", ["loc", [null, [21, 35], [21, 48]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "picks.p2.name", ["loc", [null, [22, 10], [22, 27]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 8
            },
            "end": {
              "line": 25,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "pick-number");
          var el2 = dom.createTextNode("2");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 8
            },
            "end": {
              "line": 33,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element15 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element15, 'src');
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "picks.p3.icon", ["loc", [null, [31, 35], [31, 48]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "picks.p3.name", ["loc", [null, [32, 10], [32, 27]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 8
            },
            "end": {
              "line": 35,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "pick-number");
          var el2 = dom.createTextNode("3");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 8
            },
            "end": {
              "line": 43,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element14 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element14, 'src');
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "picks.p4.icon", ["loc", [null, [41, 35], [41, 48]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "picks.p4.name", ["loc", [null, [42, 10], [42, 27]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 8
            },
            "end": {
              "line": 45,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "pick-number");
          var el2 = dom.createTextNode("4");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 8
            },
            "end": {
              "line": 53,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element13 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element13, 'src');
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "picks.p5.icon", ["loc", [null, [51, 35], [51, 48]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "picks.p5.name", ["loc", [null, [52, 10], [52, 27]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 53,
              "column": 8
            },
            "end": {
              "line": 55,
              "column": 8
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "pick-number");
          var el2 = dom.createTextNode("5");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 63,
                "column": 6
              },
              "end": {
                "line": 65,
                "column": 6
              }
            },
            "moduleName": "client/templates/components/primary-view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-circle-o-notch fa-spin");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 65,
                "column": 6
              },
              "end": {
                "line": 67,
                "column": 6
              }
            },
            "moduleName": "client/templates/components/primary-view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Estimate Winrate\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 2
            },
            "end": {
              "line": 69,
              "column": 2
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element12 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element12, 'class');
          morphs[1] = dom.createElementMorph(element12);
          morphs[2] = dom.createMorphAt(element12, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["btn primary ", ["subexpr", "if", [["get", "isLoading", ["loc", [null, [62, 33], [62, 42]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [62, 28], [62, 55]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["getResults"], [], ["loc", [null, [62, 57], [62, 80]]], 0, 0], ["block", "if", [["get", "isLoading", ["loc", [null, [63, 12], [63, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [63, 6], [67, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 69,
              "column": 2
            },
            "end": {
              "line": 71,
              "column": 2
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "btn disabled ladda-spinner");
          var el2 = dom.createTextNode("Select 5 Champions");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 81,
                "column": 8
              },
              "end": {
                "line": 85,
                "column": 8
              }
            },
            "moduleName": "client/templates/components/primary-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-xs");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "tag good");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "tag", ["loc", [null, [83, 34], [83, 41]]], 0, 0, 0, 0]],
          locals: ["tag"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 87,
                "column": 8
              },
              "end": {
                "line": 91,
                "column": 8
              }
            },
            "moduleName": "client/templates/components/primary-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-xs");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "tag bad");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "tag", ["loc", [null, [89, 33], [89, 40]]], 0, 0, 0, 0]],
          locals: ["tag"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 73,
              "column": 2
            },
            "end": {
              "line": 103,
              "column": 2
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "results");
          var el2 = dom.createTextNode("\n      Estimated WR: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("%\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    Calculated Attributes\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row center-xs tags");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    Sharing and Social Media\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "social-media");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "sm-link");
          var el3 = dom.createElement("a");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-facebook-f fa-fw");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Facebook");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "sm-link");
          var el3 = dom.createElement("a");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-twitter fa-fw");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Twitter");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "sm-link");
          var el3 = dom.createElement("a");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-reddit-alien fa-fw");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Reddit");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "sm-link");
          var el3 = dom.createElement("a");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-envelope fa-fw");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Email");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "sm-link");
          var el3 = dom.createElement("a");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "fa fa-link fa-fw");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Hyperlink");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [3]);
          var element6 = dom.childAt(fragment, [5]);
          var element7 = dom.childAt(element6, [1, 0]);
          var element8 = dom.childAt(element6, [3, 0]);
          var element9 = dom.childAt(element6, [5, 0]);
          var element10 = dom.childAt(element6, [7, 0]);
          var element11 = dom.childAt(element6, [9, 0]);
          var morphs = new Array(8);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element5, 1, 1);
          morphs[2] = dom.createMorphAt(element5, 3, 3);
          morphs[3] = dom.createAttrMorph(element7, 'href');
          morphs[4] = dom.createAttrMorph(element8, 'href');
          morphs[5] = dom.createAttrMorph(element9, 'href');
          morphs[6] = dom.createAttrMorph(element10, 'href');
          morphs[7] = dom.createAttrMorph(element11, 'href');
          return morphs;
        },
        statements: [["content", "score", ["loc", [null, [76, 20], [76, 29]]], 0, 0, 0, 0], ["block", "each", [["get", "tags.good", ["loc", [null, [81, 16], [81, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [81, 8], [85, 17]]]], ["block", "each", [["get", "tags.bad", ["loc", [null, [87, 16], [87, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [87, 8], [91, 17]]]], ["attribute", "href", ["concat", ["https://www.facebook.com/sharer/sharer.php?u=", ["get", "currentUrlEncoded", ["loc", [null, [96, 82], [96, 99]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["https://twitter.com/home?status=", ["get", "currentUrlEncoded", ["loc", [null, [97, 69], [97, 86]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["http://www.reddit.com/submit?url=", ["get", "currentUrlEncoded", ["loc", [null, [98, 70], [98, 87]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["mailto:?&subject=LolComp&body=", ["get", "currentUrlEncoded", ["loc", [null, [99, 67], [99, 84]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "currentUrl", ["loc", [null, [100, 37], [100, 47]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child13 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 122,
                  "column": 16
                },
                "end": {
                  "line": 124,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("top");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 125,
                  "column": 16
                },
                "end": {
                  "line": 127,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag okay");
              var el2 = dom.createTextNode("top");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 128,
                  "column": 16
                },
                "end": {
                  "line": 130,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag bad");
              var el2 = dom.createTextNode("top");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 133,
                  "column": 16
                },
                "end": {
                  "line": 135,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("jungle");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child4 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 136,
                  "column": 16
                },
                "end": {
                  "line": 138,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag okay");
              var el2 = dom.createTextNode("jungle");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child5 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 139,
                  "column": 16
                },
                "end": {
                  "line": 141,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag bad");
              var el2 = dom.createTextNode("jungle");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child6 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 144,
                  "column": 16
                },
                "end": {
                  "line": 146,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("mid");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child7 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 147,
                  "column": 16
                },
                "end": {
                  "line": 149,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag okay");
              var el2 = dom.createTextNode("mid");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child8 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 150,
                  "column": 16
                },
                "end": {
                  "line": 152,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag bad");
              var el2 = dom.createTextNode("mid");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child9 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 155,
                  "column": 16
                },
                "end": {
                  "line": 157,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("adc");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child10 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 158,
                  "column": 16
                },
                "end": {
                  "line": 160,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag okay");
              var el2 = dom.createTextNode("adc");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child11 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 161,
                  "column": 16
                },
                "end": {
                  "line": 163,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag bad");
              var el2 = dom.createTextNode("adc");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child12 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 166,
                  "column": 16
                },
                "end": {
                  "line": 168,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("support");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child13 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 169,
                  "column": 16
                },
                "end": {
                  "line": 171,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag okay");
              var el2 = dom.createTextNode("support");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child14 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 172,
                  "column": 16
                },
                "end": {
                  "line": 174,
                  "column": 16
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag bad");
              var el2 = dom.createTextNode("support");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child15 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 177,
                  "column": 16
                },
                "end": {
                  "line": 177,
                  "column": 84
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("cc");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child16 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 178,
                  "column": 16
                },
                "end": {
                  "line": 178,
                  "column": 100
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("initiation");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child17 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 179,
                  "column": 16
                },
                "end": {
                  "line": 179,
                  "column": 86
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("dps");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child18 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 180,
                  "column": 16
                },
                "end": {
                  "line": 180,
                  "column": 90
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("burst");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child19 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 181,
                  "column": 16
                },
                "end": {
                  "line": 181,
                  "column": 88
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("tank");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child20 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 182,
                  "column": 16
                },
                "end": {
                  "line": 182,
                  "column": 90
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("clear");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child21 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 183,
                  "column": 16
                },
                "end": {
                  "line": 183,
                  "column": 88
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("peel");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child22 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 184,
                  "column": 16
                },
                "end": {
                  "line": 184,
                  "column": 93
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("magic");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child23 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 185,
                  "column": 16
                },
                "end": {
                  "line": 185,
                  "column": 99
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("physical");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child24 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 186,
                  "column": 16
                },
                "end": {
                  "line": 186,
                  "column": 91
                }
              },
              "moduleName": "client/templates/components/primary-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "mini-tag good");
              var el2 = dom.createTextNode("true");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 109,
                "column": 8
              },
              "end": {
                "line": 190,
                "column": 8
              }
            },
            "moduleName": "client/templates/components/primary-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-xs");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "icon");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("ul");
            dom.setAttribute(el3, "class", "mini-tags left");
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment(" top ");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment(" jg ");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment(" mid ");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment(" bottom ");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment(" support ");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("              ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("ul");
            dom.setAttribute(el3, "class", "mini-tags right");
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [5]);
            var element3 = dom.childAt(element0, [7]);
            var morphs = new Array(29);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createAttrMorph(element1, 'src');
            morphs[3] = dom.createMorphAt(element0, 3, 3);
            morphs[4] = dom.createMorphAt(element2, 3, 3);
            morphs[5] = dom.createMorphAt(element2, 4, 4);
            morphs[6] = dom.createMorphAt(element2, 5, 5);
            morphs[7] = dom.createMorphAt(element2, 9, 9);
            morphs[8] = dom.createMorphAt(element2, 10, 10);
            morphs[9] = dom.createMorphAt(element2, 11, 11);
            morphs[10] = dom.createMorphAt(element2, 15, 15);
            morphs[11] = dom.createMorphAt(element2, 16, 16);
            morphs[12] = dom.createMorphAt(element2, 17, 17);
            morphs[13] = dom.createMorphAt(element2, 21, 21);
            morphs[14] = dom.createMorphAt(element2, 22, 22);
            morphs[15] = dom.createMorphAt(element2, 23, 23);
            morphs[16] = dom.createMorphAt(element2, 27, 27);
            morphs[17] = dom.createMorphAt(element2, 28, 28);
            morphs[18] = dom.createMorphAt(element2, 29, 29);
            morphs[19] = dom.createMorphAt(element3, 1, 1);
            morphs[20] = dom.createMorphAt(element3, 3, 3);
            morphs[21] = dom.createMorphAt(element3, 5, 5);
            morphs[22] = dom.createMorphAt(element3, 7, 7);
            morphs[23] = dom.createMorphAt(element3, 9, 9);
            morphs[24] = dom.createMorphAt(element3, 11, 11);
            morphs[25] = dom.createMorphAt(element3, 13, 13);
            morphs[26] = dom.createMorphAt(element3, 15, 15);
            morphs[27] = dom.createMorphAt(element3, 17, 17);
            morphs[28] = dom.createMorphAt(element3, 19, 19);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["champion\n              ", ["subexpr", "if", [["subexpr", "eq", [["get", "picks.p1.key", ["loc", [null, [112, 23], [112, 35]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [112, 36], [112, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [112, 19], [112, 49]]], 0, 0], "disabled"], [], ["loc", [null, [112, 14], [112, 62]]], 0, 0], "\n              ", ["subexpr", "if", [["subexpr", "eq", [["get", "picks.p2.key", ["loc", [null, [113, 23], [113, 35]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [113, 36], [113, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [113, 19], [113, 49]]], 0, 0], "disabled"], [], ["loc", [null, [113, 14], [113, 62]]], 0, 0], "\n              ", ["subexpr", "if", [["subexpr", "eq", [["get", "picks.p3.key", ["loc", [null, [114, 23], [114, 35]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [114, 36], [114, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [114, 19], [114, 49]]], 0, 0], "disabled"], [], ["loc", [null, [114, 14], [114, 62]]], 0, 0], "\n              ", ["subexpr", "if", [["subexpr", "eq", [["get", "picks.p4.key", ["loc", [null, [115, 23], [115, 35]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [115, 36], [115, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [115, 19], [115, 49]]], 0, 0], "disabled"], [], ["loc", [null, [115, 14], [115, 62]]], 0, 0], "\n              ", ["subexpr", "if", [["subexpr", "eq", [["get", "picks.p5.key", ["loc", [null, [116, 23], [116, 35]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [116, 36], [116, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [116, 19], [116, 49]]], 0, 0], "disabled"], [], ["loc", [null, [116, 14], [116, 62]]], 0, 0], "\n              "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["setChampion", ["get", "picking", ["loc", [null, [117, 39], [117, 46]]], 0, 0, 0, 0], ["get", "champion.key", ["loc", [null, [117, 47], [117, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [117, 16], [117, 61]]], 0, 0], ["attribute", "src", ["concat", [["get", "champion.icon", ["loc", [null, [118, 39], [118, 52]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "champion.name", ["loc", [null, [119, 14], [119, 31]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.top", ["loc", [null, [122, 27], [122, 47]]], 0, 0, 0, 0], 4], [], ["loc", [null, [122, 22], [122, 50]]], 0, 0]], [], 0, null, ["loc", [null, [122, 16], [124, 23]]]], ["block", "if", [["subexpr", "eq", [["get", "champion.weights.top", ["loc", [null, [125, 26], [125, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [125, 22], [125, 49]]], 0, 0]], [], 1, null, ["loc", [null, [125, 16], [127, 23]]]], ["block", "if", [["subexpr", "lt", [["get", "champion.weights.top", ["loc", [null, [128, 26], [128, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [128, 22], [128, 49]]], 0, 0]], [], 2, null, ["loc", [null, [128, 16], [130, 23]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.jungle", ["loc", [null, [133, 27], [133, 50]]], 0, 0, 0, 0], 4], [], ["loc", [null, [133, 22], [133, 53]]], 0, 0]], [], 3, null, ["loc", [null, [133, 16], [135, 23]]]], ["block", "if", [["subexpr", "eq", [["get", "champion.weights.jungle", ["loc", [null, [136, 26], [136, 49]]], 0, 0, 0, 0], 3], [], ["loc", [null, [136, 22], [136, 52]]], 0, 0]], [], 4, null, ["loc", [null, [136, 16], [138, 23]]]], ["block", "if", [["subexpr", "lt", [["get", "champion.weights.jungle", ["loc", [null, [139, 26], [139, 49]]], 0, 0, 0, 0], 3], [], ["loc", [null, [139, 22], [139, 52]]], 0, 0]], [], 5, null, ["loc", [null, [139, 16], [141, 23]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.mid", ["loc", [null, [144, 27], [144, 47]]], 0, 0, 0, 0], 4], [], ["loc", [null, [144, 22], [144, 50]]], 0, 0]], [], 6, null, ["loc", [null, [144, 16], [146, 23]]]], ["block", "if", [["subexpr", "eq", [["get", "champion.weights.mid", ["loc", [null, [147, 26], [147, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [147, 22], [147, 49]]], 0, 0]], [], 7, null, ["loc", [null, [147, 16], [149, 23]]]], ["block", "if", [["subexpr", "lt", [["get", "champion.weights.mid", ["loc", [null, [150, 26], [150, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [150, 22], [150, 49]]], 0, 0]], [], 8, null, ["loc", [null, [150, 16], [152, 23]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.adc", ["loc", [null, [155, 27], [155, 47]]], 0, 0, 0, 0], 4], [], ["loc", [null, [155, 22], [155, 50]]], 0, 0]], [], 9, null, ["loc", [null, [155, 16], [157, 23]]]], ["block", "if", [["subexpr", "eq", [["get", "champion.weights.adc", ["loc", [null, [158, 26], [158, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [158, 22], [158, 49]]], 0, 0]], [], 10, null, ["loc", [null, [158, 16], [160, 23]]]], ["block", "if", [["subexpr", "lt", [["get", "champion.weights.adc", ["loc", [null, [161, 26], [161, 46]]], 0, 0, 0, 0], 3], [], ["loc", [null, [161, 22], [161, 49]]], 0, 0]], [], 11, null, ["loc", [null, [161, 16], [163, 23]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.support", ["loc", [null, [166, 27], [166, 51]]], 0, 0, 0, 0], 4], [], ["loc", [null, [166, 22], [166, 54]]], 0, 0]], [], 12, null, ["loc", [null, [166, 16], [168, 23]]]], ["block", "if", [["subexpr", "eq", [["get", "champion.weights.support", ["loc", [null, [169, 26], [169, 50]]], 0, 0, 0, 0], 3], [], ["loc", [null, [169, 22], [169, 53]]], 0, 0]], [], 13, null, ["loc", [null, [169, 16], [171, 23]]]], ["block", "if", [["subexpr", "lt", [["get", "champion.weights.support", ["loc", [null, [172, 26], [172, 50]]], 0, 0, 0, 0], 3], [], ["loc", [null, [172, 22], [172, 53]]], 0, 0]], [], 14, null, ["loc", [null, [172, 16], [174, 23]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.cc", ["loc", [null, [177, 27], [177, 46]]], 0, 0, 0, 0], 4], [], ["loc", [null, [177, 22], [177, 49]]], 0, 0]], [], 15, null, ["loc", [null, [177, 16], [177, 91]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.initiation", ["loc", [null, [178, 27], [178, 54]]], 0, 0, 0, 0], 4], [], ["loc", [null, [178, 22], [178, 57]]], 0, 0]], [], 16, null, ["loc", [null, [178, 16], [178, 107]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.dps", ["loc", [null, [179, 27], [179, 47]]], 0, 0, 0, 0], 4], [], ["loc", [null, [179, 22], [179, 50]]], 0, 0]], [], 17, null, ["loc", [null, [179, 16], [179, 93]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.burst", ["loc", [null, [180, 27], [180, 49]]], 0, 0, 0, 0], 4], [], ["loc", [null, [180, 22], [180, 52]]], 0, 0]], [], 18, null, ["loc", [null, [180, 16], [180, 97]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.tank", ["loc", [null, [181, 27], [181, 48]]], 0, 0, 0, 0], 4], [], ["loc", [null, [181, 22], [181, 51]]], 0, 0]], [], 19, null, ["loc", [null, [181, 16], [181, 95]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.clear", ["loc", [null, [182, 27], [182, 49]]], 0, 0, 0, 0], 4], [], ["loc", [null, [182, 22], [182, 52]]], 0, 0]], [], 20, null, ["loc", [null, [182, 16], [182, 97]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.peel", ["loc", [null, [183, 27], [183, 48]]], 0, 0, 0, 0], 4], [], ["loc", [null, [183, 22], [183, 51]]], 0, 0]], [], 21, null, ["loc", [null, [183, 16], [183, 95]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.magicDMG", ["loc", [null, [184, 27], [184, 52]]], 0, 0, 0, 0], 4], [], ["loc", [null, [184, 22], [184, 55]]], 0, 0]], [], 22, null, ["loc", [null, [184, 16], [184, 100]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.physicalDMG", ["loc", [null, [185, 27], [185, 55]]], 0, 0, 0, 0], 4], [], ["loc", [null, [185, 22], [185, 58]]], 0, 0]], [], 23, null, ["loc", [null, [185, 16], [185, 106]]]], ["block", "if", [["subexpr", "gte", [["get", "champion.weights.trueDMG", ["loc", [null, [186, 27], [186, 51]]], 0, 0, 0, 0], 2], [], ["loc", [null, [186, 22], [186, 54]]], 0, 0]], [], 24, null, ["loc", [null, [186, 16], [186, 98]]]]],
          locals: ["champion"],
          templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14, child15, child16, child17, child18, child19, child20, child21, child22, child23, child24]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 105,
              "column": 2
            },
            "end": {
              "line": 193,
              "column": 2
            }
          },
          "moduleName": "client/templates/components/primary-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pick");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row center-xs");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element4, 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "input", [], ["class", "search", "value", ["subexpr", "@mut", [["get", "search", ["loc", [null, [107, 35], [107, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "text", "placeholder", "search champions"], ["loc", [null, [107, 6], [107, 86]]], 0, 0], ["block", "each", [["get", "filteredChampions", ["loc", [null, [109, 16], [109, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [109, 8], [190, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 222,
            "column": 0
          }
        },
        "moduleName": "client/templates/components/primary-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "logo");
        dom.setAttribute(el3, "src", "/tc-logo.png");
        dom.setAttribute(el3, "align", "middle");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "sub");
        var el4 = dom.createTextNode("v0.045 | 06/017/2018 | patch 8.12");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row center-xs");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "footnotes");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "methodology");
        var el4 = dom.createTextNode("\n      Methodology\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "sub footnote");
        var el5 = dom.createTextNode("\n        This application uses a ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "https://en.wikipedia.org/wiki/Feedforward_neural_network");
        var el6 = dom.createTextNode("feed-forward neural network");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" for determining the probability that any given 5 player\n        team composition will win a given game as a result of the team's champion composition.");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        In order to accomplish this, we start with a dataset of 100,000 ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "https://na.leagueoflegends.com/en/news/game-updates/patch/patch-812-notes");
        var el6 = dom.createTextNode("current-patch");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" League of Legends games. These game records\n        contain a large number of in game statistics (for example, damage dealt, magic/physical/true damage split, healing done, etc.)\n        in addition to the full roster of both the ally team champions and enemy team champions.");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        Initially, the neural network has neutral opinions (weights) on every champion and combination of champions. Then one by one the neural network is fed\n        a game record, and attempts to predict the outcome of that game (what team will win) - based on the current allied team composition.\n        If the neural network does not predict the outcome successfully, it adjusts\n        the weights of several heuristics (attributes and synergies) in it's external memory. The neural network does not remember the outcome of the game in it's external memory,\n        so the next time it is fed the same game it will make a clean prediction but with the most recent weights.");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        Over millions and millions of prediction attempts, the neural network becomes increasingly accurate at correctly predicting the outcome of a match based on the allied\n        team composition. Swings in heuristic weighting (for example, learning to favor more durable team compositions - or to favor a synergy of brand/mf) will over time\n        become smaller and smaller until diminishing returns kick in and greatly increased computing power is needed to obtain more accurate weighting.");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        Once the weight swings become minimal, and the accuracy of prediction becomes reliable the weights are formatted, stored in a file than saved to disk so that future\n        predictions can be made at a high accuracy starting point without requiring the AI to do additional learning on the data set.\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element18 = dom.childAt(fragment, [0]);
        var element19 = dom.childAt(element18, [3]);
        var element20 = dom.childAt(element19, [1, 1]);
        var element21 = dom.childAt(element19, [3, 1]);
        var element22 = dom.childAt(element19, [5, 1]);
        var element23 = dom.childAt(element19, [7, 1]);
        var element24 = dom.childAt(element19, [9, 1]);
        var morphs = new Array(18);
        morphs[0] = dom.createAttrMorph(element20, 'class');
        morphs[1] = dom.createElementMorph(element20);
        morphs[2] = dom.createMorphAt(element20, 1, 1);
        morphs[3] = dom.createAttrMorph(element21, 'class');
        morphs[4] = dom.createElementMorph(element21);
        morphs[5] = dom.createMorphAt(element21, 1, 1);
        morphs[6] = dom.createAttrMorph(element22, 'class');
        morphs[7] = dom.createElementMorph(element22);
        morphs[8] = dom.createMorphAt(element22, 1, 1);
        morphs[9] = dom.createAttrMorph(element23, 'class');
        morphs[10] = dom.createElementMorph(element23);
        morphs[11] = dom.createMorphAt(element23, 1, 1);
        morphs[12] = dom.createAttrMorph(element24, 'class');
        morphs[13] = dom.createElementMorph(element24);
        morphs[14] = dom.createMorphAt(element24, 1, 1);
        morphs[15] = dom.createMorphAt(element18, 7, 7);
        morphs[16] = dom.createMorphAt(element18, 9, 9);
        morphs[17] = dom.createMorphAt(element18, 11, 11);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["select-champion ", ["subexpr", "if", [["subexpr", "eq", [["get", "picking", ["loc", [null, [9, 43], [9, 50]]], 0, 0, 0, 0], 1], [], ["loc", [null, [9, 39], [9, 53]]], 0, 0], "picking"], [], ["loc", [null, [9, 34], [9, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pick", 1], [], ["loc", [null, [9, 67], [9, 86]]], 0, 0], ["block", "if", [["get", "picks.p1.name", ["loc", [null, [10, 14], [10, 27]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [10, 8], [15, 15]]]], ["attribute", "class", ["concat", ["select-champion ", ["subexpr", "if", [["subexpr", "eq", [["get", "picking", ["loc", [null, [19, 43], [19, 50]]], 0, 0, 0, 0], 2], [], ["loc", [null, [19, 39], [19, 53]]], 0, 0], "picking"], [], ["loc", [null, [19, 34], [19, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pick", 2], [], ["loc", [null, [19, 67], [19, 86]]], 0, 0], ["block", "if", [["get", "picks.p2.name", ["loc", [null, [20, 14], [20, 27]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [20, 8], [25, 15]]]], ["attribute", "class", ["concat", ["select-champion ", ["subexpr", "if", [["subexpr", "eq", [["get", "picking", ["loc", [null, [29, 43], [29, 50]]], 0, 0, 0, 0], 3], [], ["loc", [null, [29, 39], [29, 53]]], 0, 0], "picking"], [], ["loc", [null, [29, 34], [29, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pick", 3], [], ["loc", [null, [29, 67], [29, 86]]], 0, 0], ["block", "if", [["get", "picks.p3.name", ["loc", [null, [30, 14], [30, 27]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [30, 8], [35, 15]]]], ["attribute", "class", ["concat", ["select-champion ", ["subexpr", "if", [["subexpr", "eq", [["get", "picking", ["loc", [null, [39, 43], [39, 50]]], 0, 0, 0, 0], 4], [], ["loc", [null, [39, 39], [39, 53]]], 0, 0], "picking"], [], ["loc", [null, [39, 34], [39, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pick", 4], [], ["loc", [null, [39, 67], [39, 86]]], 0, 0], ["block", "if", [["get", "picks.p4.name", ["loc", [null, [40, 14], [40, 27]]], 0, 0, 0, 0]], [], 6, 7, ["loc", [null, [40, 8], [45, 15]]]], ["attribute", "class", ["concat", ["select-champion ", ["subexpr", "if", [["subexpr", "eq", [["get", "picking", ["loc", [null, [49, 43], [49, 50]]], 0, 0, 0, 0], 5], [], ["loc", [null, [49, 39], [49, 53]]], 0, 0], "picking"], [], ["loc", [null, [49, 34], [49, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pick", 5], [], ["loc", [null, [49, 67], [49, 86]]], 0, 0], ["block", "if", [["get", "picks.p5.name", ["loc", [null, [50, 14], [50, 27]]], 0, 0, 0, 0]], [], 8, 9, ["loc", [null, [50, 8], [55, 15]]]], ["block", "if", [["get", "allPicked", ["loc", [null, [61, 8], [61, 17]]], 0, 0, 0, 0]], [], 10, 11, ["loc", [null, [61, 2], [71, 9]]]], ["block", "if", [["get", "results", ["loc", [null, [73, 8], [73, 15]]], 0, 0, 0, 0]], [], 12, null, ["loc", [null, [73, 2], [103, 9]]]], ["block", "if", [["get", "picking", ["loc", [null, [105, 8], [105, 15]]], 0, 0, 0, 0]], [], 13, null, ["loc", [null, [105, 2], [193, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13]
    };
  })());
});
define("client/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "client/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "bg-bg");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "bg");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "bg-cover");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "primary-view", ["loc", [null, [2, 0], [2, 16]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('client/config/environment', ['ember'], function(Ember) {
  var prefix = 'client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("client/app")["default"].create({"name":"client","version":"0.0.0+5aa595d2"});
}

/* jshint ignore:end */
//# sourceMappingURL=client.map
