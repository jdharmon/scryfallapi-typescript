/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const RelatedCards = {
  required: false,
  serializedName: 'related_cards',
  type: {
    name: 'Composite',
    className: 'RelatedCards',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      uri: {
        required: false,
        serializedName: 'uri',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ImageUri = {
  required: false,
  serializedName: 'image_uri',
  type: {
    name: 'Composite',
    className: 'ImageUri',
    modelProperties: {
      small: {
        required: false,
        serializedName: 'small',
        type: {
          name: 'String'
        }
      },
      normal: {
        required: false,
        serializedName: 'normal',
        type: {
          name: 'String'
        }
      },
      large: {
        required: false,
        serializedName: 'large',
        type: {
          name: 'String'
        }
      },
      png: {
        required: false,
        serializedName: 'png',
        type: {
          name: 'String'
        }
      },
      artCrop: {
        required: false,
        serializedName: 'art_crop',
        type: {
          name: 'String'
        }
      },
      borderCrop: {
        required: false,
        serializedName: 'border_crop',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const CardFace = {
  required: false,
  serializedName: 'card_face',
  type: {
    name: 'Composite',
    className: 'CardFace',
    modelProperties: {
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      typeLine: {
        required: false,
        serializedName: 'type_line',
        type: {
          name: 'String'
        }
      },
      oracleText: {
        required: false,
        serializedName: 'oracle_text',
        type: {
          name: 'String'
        }
      },
      manaCost: {
        required: false,
        serializedName: 'mana_cost',
        type: {
          name: 'String'
        }
      },
      colors: {
        required: false,
        serializedName: 'colors',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ColorsElementType',
              type: {
                name: 'Enum',
                allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
              }
          }
        }
      },
      colorIndicator: {
        required: false,
        serializedName: 'color_indicator',
        type: {
          name: 'Enum',
          allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
        }
      },
      power: {
        required: false,
        serializedName: 'power',
        type: {
          name: 'String'
        }
      },
      toughness: {
        required: false,
        serializedName: 'toughness',
        type: {
          name: 'String'
        }
      },
      loyalty: {
        required: false,
        serializedName: 'loyalty',
        type: {
          name: 'String'
        }
      },
      flavorText: {
        required: false,
        serializedName: 'flavor_text',
        type: {
          name: 'String'
        }
      },
      illustrationId: {
        required: false,
        serializedName: 'illustration_id',
        type: {
          name: 'String'
        }
      },
      imageUris: {
        required: false,
        serializedName: 'image_uris',
        type: {
          name: 'Composite',
          className: 'ImageUri'
        }
      }
    }
  }
};

export const Legality = {
  required: false,
  serializedName: 'legality',
  type: {
    name: 'Composite',
    className: 'Legality',
    modelProperties: {
      standard: {
        required: false,
        serializedName: 'standard',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      future: {
        required: false,
        serializedName: 'future',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      frontier: {
        required: false,
        serializedName: 'frontier',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      modern: {
        required: false,
        serializedName: 'modern',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      legacy: {
        required: false,
        serializedName: 'legacy',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      pauper: {
        required: false,
        serializedName: 'pauper',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      vintage: {
        required: false,
        serializedName: 'vintage',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      penny: {
        required: false,
        serializedName: 'penny',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      commander: {
        required: false,
        serializedName: 'commander',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      onevOne: {
        required: false,
        serializedName: '1v1',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      duel: {
        required: false,
        serializedName: 'duel',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      },
      brawl: {
        required: false,
        serializedName: 'brawl',
        type: {
          name: 'Enum',
          allowedValues: [ 'legal', 'not_legal' ]
        }
      }
    }
  }
};

export const Card = {
  required: false,
  serializedName: 'card',
  type: {
    name: 'Composite',
    className: 'Card',
    modelProperties: {
      id: {
        required: false,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      oracleId: {
        required: false,
        serializedName: 'oracle_id',
        type: {
          name: 'String'
        }
      },
      multiverseIds: {
        required: false,
        serializedName: 'multiverse_ids',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'numberElementType',
              type: {
                name: 'Number'
              }
          }
        }
      },
      mtgoId: {
        required: false,
        serializedName: 'mtgo_id',
        type: {
          name: 'Number'
        }
      },
      mtgoFoilId: {
        required: false,
        serializedName: 'mtgo_foil_id',
        type: {
          name: 'Number'
        }
      },
      uri: {
        required: false,
        serializedName: 'uri',
        type: {
          name: 'String'
        }
      },
      scryfallUri: {
        required: false,
        serializedName: 'scryfall_uri',
        type: {
          name: 'String'
        }
      },
      printsSearchUri: {
        required: false,
        serializedName: 'prints_search_uri',
        type: {
          name: 'String'
        }
      },
      rulingsUri: {
        required: false,
        serializedName: 'rulings_uri',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      layout: {
        required: false,
        serializedName: 'layout',
        type: {
          name: 'Enum',
          allowedValues: [ 'normal', 'split', 'transform', 'meld', 'leveler', 'saga', 'planar', 'scheme', 'vanguard', 'token', 'double_faced_token', 'emblem', 'augment', 'host' ]
        }
      },
      cmc: {
        required: false,
        serializedName: 'cmc',
        type: {
          name: 'Number'
        }
      },
      typeLine: {
        required: false,
        serializedName: 'type_line',
        type: {
          name: 'String'
        }
      },
      oracleText: {
        required: false,
        serializedName: 'oracle_text',
        type: {
          name: 'String'
        }
      },
      manaCost: {
        required: false,
        serializedName: 'mana_cost',
        type: {
          name: 'String'
        }
      },
      power: {
        required: false,
        serializedName: 'power',
        type: {
          name: 'String'
        }
      },
      toughness: {
        required: false,
        serializedName: 'toughness',
        type: {
          name: 'String'
        }
      },
      loyalty: {
        required: false,
        serializedName: 'loyalty',
        type: {
          name: 'String'
        }
      },
      lifeModifier: {
        required: false,
        serializedName: 'life_modifier',
        type: {
          name: 'String'
        }
      },
      handModifier: {
        required: false,
        serializedName: 'hand_modifier',
        type: {
          name: 'String'
        }
      },
      colors: {
        required: false,
        serializedName: 'colors',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ColorsElementType',
              type: {
                name: 'Enum',
                allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
              }
          }
        }
      },
      colorIndicator: {
        required: false,
        serializedName: 'color_indicator',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ColorsElementType',
              type: {
                name: 'Enum',
                allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
              }
          }
        }
      },
      colorIdentity: {
        required: false,
        serializedName: 'color_identity',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ColorsElementType',
              type: {
                name: 'Enum',
                allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
              }
          }
        }
      },
      allParts: {
        required: false,
        serializedName: 'all_parts',
        type: {
          name: 'Composite',
          className: 'RelatedCards'
        }
      },
      cardFaces: {
        required: false,
        serializedName: 'card_faces',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CardFaceElementType',
              type: {
                name: 'Composite',
                className: 'CardFace'
              }
          }
        }
      },
      legalities: {
        required: false,
        serializedName: 'legalities',
        type: {
          name: 'Composite',
          className: 'Legality'
        }
      },
      reserved: {
        required: false,
        serializedName: 'reserved',
        type: {
          name: 'Boolean'
        }
      },
      edhrecRank: {
        required: false,
        serializedName: 'edhrec_rank',
        type: {
          name: 'Number'
        }
      },
      set: {
        required: false,
        serializedName: 'set',
        type: {
          name: 'String'
        }
      },
      setName: {
        required: false,
        serializedName: 'set_name',
        type: {
          name: 'String'
        }
      },
      collectorNumber: {
        required: false,
        serializedName: 'collector_number',
        type: {
          name: 'String'
        }
      },
      setSearchUri: {
        required: false,
        serializedName: 'set_search_uri',
        type: {
          name: 'String'
        }
      },
      scryfallSetUri: {
        required: false,
        serializedName: 'scryfall_set_uri',
        type: {
          name: 'String'
        }
      },
      imageUris: {
        required: false,
        serializedName: 'image_uris',
        type: {
          name: 'Composite',
          className: 'ImageUri'
        }
      },
      highresImage: {
        required: false,
        serializedName: 'highres_image',
        type: {
          name: 'Boolean'
        }
      },
      reprint: {
        required: false,
        serializedName: 'reprint',
        type: {
          name: 'Boolean'
        }
      },
      digital: {
        required: false,
        serializedName: 'digital',
        type: {
          name: 'Boolean'
        }
      },
      rarity: {
        required: false,
        serializedName: 'rarity',
        type: {
          name: 'Enum',
          allowedValues: [ 'common', 'uncommon', 'rare', 'mythic' ]
        }
      },
      flavorText: {
        required: false,
        serializedName: 'flavor_text',
        type: {
          name: 'String'
        }
      },
      artist: {
        required: false,
        serializedName: 'artist',
        type: {
          name: 'String'
        }
      },
      illustrationId: {
        required: false,
        serializedName: 'illustration_id',
        type: {
          name: 'String'
        }
      },
      frame: {
        required: false,
        serializedName: 'frame',
        type: {
          name: 'String'
        }
      },
      fullArt: {
        required: false,
        serializedName: 'full_art',
        type: {
          name: 'Boolean'
        }
      },
      watermark: {
        required: false,
        serializedName: 'watermark',
        type: {
          name: 'String'
        }
      },
      borderColor: {
        required: false,
        serializedName: 'border_color',
        type: {
          name: 'Enum',
          allowedValues: [ 'black', 'borderless', 'gold', 'silver', 'white' ]
        }
      },
      storySpotlightNumber: {
        required: false,
        serializedName: 'story_spotlight_number',
        type: {
          name: 'Number'
        }
      },
      storySpotlightUri: {
        required: false,
        serializedName: 'story_spotlight_uri',
        type: {
          name: 'String'
        }
      },
      timeshifted: {
        required: false,
        serializedName: 'timeshifted',
        type: {
          name: 'Boolean'
        }
      },
      colorshifted: {
        required: false,
        serializedName: 'colorshifted',
        type: {
          name: 'Boolean'
        }
      },
      futureshifted: {
        required: false,
        serializedName: 'futureshifted',
        type: {
          name: 'Boolean'
        }
      },
      purchaseUris: {
        required: false,
        serializedName: 'purchase_uris',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      relatedUris: {
        required: false,
        serializedName: 'related_uris',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const Catalog = {
  required: false,
  serializedName: 'catalog',
  type: {
    name: 'Composite',
    className: 'Catalog',
    modelProperties: {
      totalItems: {
        required: false,
        serializedName: 'total_items',
        type: {
          name: 'Number'
        }
      },
      data: {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const Set = {
  required: false,
  serializedName: 'set',
  type: {
    name: 'Composite',
    className: 'Set',
    modelProperties: {
      code: {
        required: false,
        serializedName: 'code',
        type: {
          name: 'String'
        }
      },
      mtgoCode: {
        required: false,
        serializedName: 'mtgo_code',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      setType: {
        required: false,
        serializedName: 'set_type',
        type: {
          name: 'Enum',
          allowedValues: [ 'core', 'expansion', 'masters', 'masterpiece', 'from_the_vault', 'spellbook', 'premium_deck', 'duel_deck', 'commander', 'planechase', 'conspiracy', 'archenemy', 'vanguard', 'funny', 'starter', 'box', 'promo', 'token', 'memorabilia', 'treasure_chest' ]
        }
      },
      releasedAt: {
        required: false,
        serializedName: 'released_at',
        type: {
          name: 'Date'
        }
      },
      blockCode: {
        required: false,
        serializedName: 'block_code',
        type: {
          name: 'String'
        }
      },
      block: {
        required: false,
        serializedName: 'block',
        type: {
          name: 'String'
        }
      },
      parentSetCode: {
        required: false,
        serializedName: 'parent_set_code',
        type: {
          name: 'String'
        }
      },
      cardCount: {
        required: false,
        serializedName: 'card_count',
        type: {
          name: 'Number'
        }
      },
      digital: {
        required: false,
        serializedName: 'digital',
        type: {
          name: 'Boolean'
        }
      },
      foil: {
        required: false,
        serializedName: 'foil',
        type: {
          name: 'Boolean'
        }
      },
      iconSvgUri: {
        required: false,
        serializedName: 'icon_svg_uri',
        type: {
          name: 'String'
        }
      },
      searchUri: {
        required: false,
        serializedName: 'search_uri',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Ruling = {
  required: false,
  serializedName: 'ruling',
  type: {
    name: 'Composite',
    className: 'Ruling',
    modelProperties: {
      source: {
        required: false,
        serializedName: 'source',
        type: {
          name: 'String'
        }
      },
      publishedAt: {
        required: false,
        serializedName: 'published_at',
        type: {
          name: 'Date'
        }
      },
      comment: {
        required: false,
        serializedName: 'comment',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const CardSymbol = {
  required: false,
  serializedName: 'card_symbol',
  type: {
    name: 'Composite',
    className: 'CardSymbol',
    modelProperties: {
      symbol: {
        required: false,
        serializedName: 'symbol',
        type: {
          name: 'String'
        }
      },
      looseVariant: {
        required: false,
        serializedName: 'loose_variant',
        type: {
          name: 'String'
        }
      },
      english: {
        required: false,
        serializedName: 'english',
        type: {
          name: 'String'
        }
      },
      transposable: {
        required: false,
        serializedName: 'transposable',
        type: {
          name: 'Boolean'
        }
      },
      representsMana: {
        required: false,
        serializedName: 'represents_mana',
        type: {
          name: 'Boolean'
        }
      },
      cmc: {
        required: false,
        serializedName: 'cmc',
        type: {
          name: 'Number'
        }
      },
      appearsInManaCosts: {
        required: false,
        serializedName: 'appears_in_mana_costs',
        type: {
          name: 'Boolean'
        }
      },
      funny: {
        required: false,
        serializedName: 'funny',
        type: {
          name: 'Boolean'
        }
      },
      colors: {
        required: false,
        serializedName: 'colors',
        type: {
          name: 'Enum',
          allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
        }
      }
    }
  }
};

export const ManaCost = {
  required: false,
  serializedName: 'mana_cost',
  type: {
    name: 'Composite',
    className: 'ManaCost',
    modelProperties: {
      cost: {
        required: false,
        serializedName: 'cost',
        type: {
          name: 'String'
        }
      },
      cmc: {
        required: false,
        serializedName: 'cmc',
        type: {
          name: 'Number'
        }
      },
      colors: {
        required: false,
        serializedName: 'colors',
        type: {
          name: 'Enum',
          allowedValues: [ 'W', 'U', 'B', 'R', 'G' ]
        }
      },
      colorless: {
        required: false,
        serializedName: 'colorless',
        type: {
          name: 'Boolean'
        }
      },
      monocolored: {
        required: false,
        serializedName: 'monocolored',
        type: {
          name: 'Boolean'
        }
      },
      multicolored: {
        required: false,
        serializedName: 'multicolored',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const CardList = {
  required: false,
  serializedName: 'card_list',
  type: {
    name: 'Composite',
    className: 'CardList',
    modelProperties: {
      totalCards: {
        required: false,
        serializedName: 'total_cards',
        type: {
          name: 'Number'
        }
      },
      hasMore: {
        required: false,
        serializedName: 'has_more',
        type: {
          name: 'Boolean'
        }
      },
      nextPage: {
        required: false,
        serializedName: 'next_page',
        type: {
          name: 'String'
        }
      },
      data: {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CardElementType',
              type: {
                name: 'Composite',
                className: 'Card'
              }
          }
        }
      }
    }
  }
};

export const SetList = {
  required: false,
  serializedName: 'set_list',
  type: {
    name: 'Composite',
    className: 'SetList',
    modelProperties: {
      data: {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'SetElementType',
              type: {
                name: 'Composite',
                className: 'Set'
              }
          }
        }
      }
    }
  }
};

export const RulingList = {
  required: false,
  serializedName: 'ruling_list',
  type: {
    name: 'Composite',
    className: 'RulingList',
    modelProperties: {
      data: {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'RulingElementType',
              type: {
                name: 'Composite',
                className: 'Ruling'
              }
          }
        }
      }
    }
  }
};

export const CardSymbolList = {
  required: false,
  serializedName: 'card_symbol_list',
  type: {
    name: 'Composite',
    className: 'CardSymbolList',
    modelProperties: {
      data: {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CardSymbolElementType',
              type: {
                name: 'Composite',
                className: 'CardSymbol'
              }
          }
        }
      }
    }
  }
};

export const ErrorModel = {
  required: false,
  serializedName: 'error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      code: {
        required: false,
        serializedName: 'code',
        type: {
          name: 'String'
        }
      },
      details: {
        required: false,
        serializedName: 'details',
        type: {
          name: 'String'
        }
      },
      type: {
        required: false,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      warnings: {
        required: false,
        serializedName: 'warnings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const CardsGetAllOptionalParams = {
  required: false,
  serializedName: 'GetAllOptions',
  type: {
    name: 'Composite',
    className: 'CardsGetAllOptionalParams',
    modelProperties: {
      page: {
        required: false,
        serializedName: 'page',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const CardsSearchOptionalParams = {
  required: false,
  serializedName: 'SearchOptions',
  type: {
    name: 'Composite',
    className: 'CardsSearchOptionalParams',
    modelProperties: {
      unique: {
        required: false,
        serializedName: 'unique',
        type: {
          name: 'Enum',
          allowedValues: [ 'cards', 'art', 'prints' ]
        }
      },
      order: {
        required: false,
        serializedName: 'order',
        type: {
          name: 'Enum',
          allowedValues: [ 'name', 'set', 'released', 'rarity', 'color', 'usd', 'tix', 'eur', 'cmc', 'power', 'toughness', 'edhrec', 'artist' ]
        }
      },
      dir: {
        required: false,
        serializedName: 'dir',
        type: {
          name: 'Enum',
          allowedValues: [ 'auto', 'asc', 'desc' ]
        }
      },
      includeExtras: {
        required: false,
        serializedName: 'include_extras',
        type: {
          name: 'Boolean'
        }
      },
      page: {
        required: false,
        serializedName: 'page',
        type: {
          name: 'Number'
        }
      }
    }
  }
};

export const CardsGetNamedOptionalParams = {
  required: false,
  serializedName: 'GetNamedOptions',
  type: {
    name: 'Composite',
    className: 'CardsGetNamedOptionalParams',
    modelProperties: {
      exact: {
        required: false,
        serializedName: 'exact',
        type: {
          name: 'String'
        }
      },
      fuzzy: {
        required: false,
        serializedName: 'fuzzy',
        type: {
          name: 'String'
        }
      },
      set: {
        required: false,
        serializedName: 'set',
        type: {
          name: 'String'
        }
      },
      format: {
        required: false,
        serializedName: 'format',
        type: {
          name: 'String'
        }
      },
      face: {
        required: false,
        serializedName: 'face',
        type: {
          name: 'String'
        }
      },
      version: {
        required: false,
        serializedName: 'version',
        type: {
          name: 'String'
        }
      },
      pretty: {
        required: false,
        serializedName: 'pretty',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};
