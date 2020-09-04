/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing RelatedCards.
 */
export interface RelatedCards {
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [uri]
   */
  uri?: string;
}

/**
 * @interface
 * An interface representing ImageUri.
 */
export interface ImageUri {
  /**
   * @member {string} [small]
   */
  small?: string;
  /**
   * @member {string} [normal]
   */
  normal?: string;
  /**
   * @member {string} [large]
   */
  large?: string;
  /**
   * @member {string} [png]
   */
  png?: string;
  /**
   * @member {string} [artCrop]
   */
  artCrop?: string;
  /**
   * @member {string} [borderCrop]
   */
  borderCrop?: string;
}

/**
 * @interface
 * An interface representing CardFace.
 */
export interface CardFace {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [typeLine]
   */
  typeLine?: string;
  /**
   * @member {string} [oracleText]
   */
  oracleText?: string;
  /**
   * @member {string} [manaCost]
   */
  manaCost?: string;
  /**
   * @member {Colors[]} [colors]
   */
  colors?: Colors[];
  /**
   * @member {Colors[]} [colorIndicator]
   */
  colorIndicator?: Colors[];
  /**
   * @member {string} [power]
   */
  power?: string;
  /**
   * @member {string} [toughness]
   */
  toughness?: string;
  /**
   * @member {string} [loyalty]
   */
  loyalty?: string;
  /**
   * @member {string} [flavorText]
   */
  flavorText?: string;
  /**
   * @member {string} [illustrationId]
   */
  illustrationId?: string;
  /**
   * @member {ImageUri} [imageUris]
   */
  imageUris?: ImageUri;
}

/**
 * @interface
 * An interface representing Legality.
 */
export interface Legality {
  /**
   * @member {LegalStatus} [standard] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  standard?: LegalStatus;
  /**
   * @member {LegalStatus} [future] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  future?: LegalStatus;
  /**
   * @member {LegalStatus} [frontier] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  frontier?: LegalStatus;
  /**
   * @member {LegalStatus} [modern] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  modern?: LegalStatus;
  /**
   * @member {LegalStatus} [legacy] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  legacy?: LegalStatus;
  /**
   * @member {LegalStatus} [pauper] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  pauper?: LegalStatus;
  /**
   * @member {LegalStatus} [vintage] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  vintage?: LegalStatus;
  /**
   * @member {LegalStatus} [penny] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  penny?: LegalStatus;
  /**
   * @member {LegalStatus} [commander] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  commander?: LegalStatus;
  /**
   * @member {LegalStatus} [onevOne] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  onevOne?: LegalStatus;
  /**
   * @member {LegalStatus} [duel] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  duel?: LegalStatus;
  /**
   * @member {LegalStatus} [brawl] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   */
  brawl?: LegalStatus;
}

/**
 * @interface
 * An interface representing Card.
 */
export interface Card {
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} [oracleId]
   */
  oracleId?: string;
  /**
   * @member {number[]} [multiverseIds]
   */
  multiverseIds?: number[];
  /**
   * @member {number} [mtgoId]
   */
  mtgoId?: number;
  /**
   * @member {number} [arenaId]
   */
  arenaId?: number;
  /**
   * @member {number} [mtgoFoilId]
   */
  mtgoFoilId?: number;
  /**
   * @member {string} [uri]
   */
  uri?: string;
  /**
   * @member {string} [scryfallUri]
   */
  scryfallUri?: string;
  /**
   * @member {string} [printsSearchUri]
   */
  printsSearchUri?: string;
  /**
   * @member {string} [rulingsUri]
   */
  rulingsUri?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {Layouts} [layout] Possible values include: 'normal', 'split',
   * 'flip', 'transform', 'meld', 'leveler', 'saga', 'planar', 'scheme',
   * 'vanguard', 'token', 'double_faced_token', 'emblem', 'augment', 'host'
   */
  layout?: Layouts;
  /**
   * @member {number} [cmc]
   */
  cmc?: number;
  /**
   * @member {string} [typeLine]
   */
  typeLine?: string;
  /**
   * @member {string} [oracleText]
   */
  oracleText?: string;
  /**
   * @member {string} [manaCost]
   */
  manaCost?: string;
  /**
   * @member {string} [power]
   */
  power?: string;
  /**
   * @member {string} [toughness]
   */
  toughness?: string;
  /**
   * @member {string} [loyalty]
   */
  loyalty?: string;
  /**
   * @member {string} [lifeModifier]
   */
  lifeModifier?: string;
  /**
   * @member {string} [handModifier]
   */
  handModifier?: string;
  /**
   * @member {Colors[]} [colors]
   */
  colors?: Colors[];
  /**
   * @member {Colors[]} [colorIndicator]
   */
  colorIndicator?: Colors[];
  /**
   * @member {Colors[]} [colorIdentity]
   */
  colorIdentity?: Colors[];
  /**
   * @member {RelatedCards[]} [allParts]
   */
  allParts?: RelatedCards[];
  /**
   * @member {CardFace[]} [cardFaces]
   */
  cardFaces?: CardFace[];
  /**
   * @member {Legality} [legalities]
   */
  legalities?: Legality;
  /**
   * @member {boolean} [reserved]
   */
  reserved?: boolean;
  /**
   * @member {number} [edhrecRank]
   */
  edhrecRank?: number;
  /**
   * @member {string} [set]
   */
  set?: string;
  /**
   * @member {string} [setName]
   */
  setName?: string;
  /**
   * @member {string} [collectorNumber]
   */
  collectorNumber?: string;
  /**
   * @member {string} [setSearchUri]
   */
  setSearchUri?: string;
  /**
   * @member {string} [scryfallSetUri]
   */
  scryfallSetUri?: string;
  /**
   * @member {ImageUri} [imageUris]
   */
  imageUris?: ImageUri;
  /**
   * @member {boolean} [highresImage]
   */
  highresImage?: boolean;
  /**
   * @member {boolean} [reprint]
   */
  reprint?: boolean;
  /**
   * @member {boolean} [digital]
   */
  digital?: boolean;
  /**
   * @member {Rarity} [rarity] Possible values include: 'common', 'uncommon',
   * 'rare', 'mythic'
   */
  rarity?: Rarity;
  /**
   * @member {string} [flavorText]
   */
  flavorText?: string;
  /**
   * @member {string} [artist]
   */
  artist?: string;
  /**
   * @member {string} [illustrationId]
   */
  illustrationId?: string;
  /**
   * @member {string} [frame]
   */
  frame?: string;
  /**
   * @member {boolean} [fullArt]
   */
  fullArt?: boolean;
  /**
   * @member {string} [watermark]
   */
  watermark?: string;
  /**
   * @member {BorderColors} [borderColor] Possible values include: 'black',
   * 'borderless', 'gold', 'silver', 'white'
   */
  borderColor?: BorderColors;
  /**
   * @member {number} [storySpotlightNumber]
   */
  storySpotlightNumber?: number;
  /**
   * @member {string} [storySpotlightUri]
   */
  storySpotlightUri?: string;
  /**
   * @member {boolean} [timeshifted]
   */
  timeshifted?: boolean;
  /**
   * @member {boolean} [colorshifted]
   */
  colorshifted?: boolean;
  /**
   * @member {boolean} [futureshifted]
   */
  futureshifted?: boolean;
  /**
   * @member {{ [propertyName: string]: string }} [purchaseUris]
   */
  purchaseUris?: { [propertyName: string]: string };
  /**
   * @member {{ [propertyName: string]: string }} [relatedUris]
   */
  relatedUris?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing Catalog.
 */
export interface Catalog {
  /**
   * @member {number} [totalItems]
   */
  totalItems?: number;
  /**
   * @member {string[]} [data]
   */
  data?: string[];
}

/**
 * @interface
 * An interface representing Set.
 */
export interface Set {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [mtgoCode]
   */
  mtgoCode?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {SetTypes} [setType] Possible values include: 'core', 'expansion',
   * 'masters', 'masterpiece', 'from_the_vault', 'spellbook', 'premium_deck',
   * 'duel_deck', 'commander', 'planechase', 'conspiracy', 'archenemy',
   * 'vanguard', 'funny', 'starter', 'box', 'promo', 'token', 'memorabilia',
   * 'treasure_chest'
   */
  setType?: SetTypes;
  /**
   * @member {Date} [releasedAt]
   */
  releasedAt?: Date;
  /**
   * @member {string} [blockCode]
   */
  blockCode?: string;
  /**
   * @member {string} [block]
   */
  block?: string;
  /**
   * @member {string} [parentSetCode]
   */
  parentSetCode?: string;
  /**
   * @member {number} [cardCount]
   */
  cardCount?: number;
  /**
   * @member {boolean} [digital]
   */
  digital?: boolean;
  /**
   * @member {boolean} [foil]
   */
  foil?: boolean;
  /**
   * @member {string} [iconSvgUri]
   */
  iconSvgUri?: string;
  /**
   * @member {string} [searchUri]
   */
  searchUri?: string;
}

/**
 * @interface
 * An interface representing Ruling.
 */
export interface Ruling {
  /**
   * @member {string} [source]
   */
  source?: string;
  /**
   * @member {Date} [publishedAt]
   */
  publishedAt?: Date;
  /**
   * @member {string} [comment]
   */
  comment?: string;
}

/**
 * @interface
 * An interface representing CardSymbol.
 */
export interface CardSymbol {
  /**
   * @member {string} [symbol]
   */
  symbol?: string;
  /**
   * @member {string} [looseVariant]
   */
  looseVariant?: string;
  /**
   * @member {string} [english]
   */
  english?: string;
  /**
   * @member {boolean} [transposable]
   */
  transposable?: boolean;
  /**
   * @member {boolean} [representsMana]
   */
  representsMana?: boolean;
  /**
   * @member {number} [cmc]
   */
  cmc?: number;
  /**
   * @member {boolean} [appearsInManaCosts]
   */
  appearsInManaCosts?: boolean;
  /**
   * @member {boolean} [funny]
   */
  funny?: boolean;
  /**
   * @member {Colors} [colors] Possible values include: 'W', 'U', 'B', 'R', 'G'
   */
  colors?: Colors;
}

/**
 * @interface
 * An interface representing ManaCost.
 */
export interface ManaCost {
  /**
   * @member {string} [cost]
   */
  cost?: string;
  /**
   * @member {number} [cmc]
   */
  cmc?: number;
  /**
   * @member {Colors} [colors] Possible values include: 'W', 'U', 'B', 'R', 'G'
   */
  colors?: Colors;
  /**
   * @member {boolean} [colorless]
   */
  colorless?: boolean;
  /**
   * @member {boolean} [monocolored]
   */
  monocolored?: boolean;
  /**
   * @member {boolean} [multicolored]
   */
  multicolored?: boolean;
}

/**
 * @interface
 * An interface representing CardList.
 */
export interface CardList {
  /**
   * @member {number} [totalCards]
   */
  totalCards?: number;
  /**
   * @member {boolean} [hasMore]
   */
  hasMore?: boolean;
  /**
   * @member {string} [nextPage]
   */
  nextPage?: string;
  /**
   * @member {Card[]} [data]
   */
  data?: Card[];
}

/**
 * @interface
 * An interface representing SetList.
 */
export interface SetList {
  /**
   * @member {Set[]} [data]
   */
  data?: Set[];
}

/**
 * @interface
 * An interface representing RulingList.
 */
export interface RulingList {
  /**
   * @member {Ruling[]} [data]
   */
  data?: Ruling[];
}

/**
 * @interface
 * An interface representing CardSymbolList.
 */
export interface CardSymbolList {
  /**
   * @member {CardSymbol[]} [data]
   */
  data?: CardSymbol[];
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [details]
   */
  details?: string;
  /**
   * @member {string} [type]
   */
  type?: string;
  /**
   * @member {string[]} [warnings]
   */
  warnings?: string[];
}

/**
 * @interface
 * An interface representing ScryfallClientOptions.
 * @extends ServiceClientOptions
 */
export interface ScryfallClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing CardsSearchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CardsSearchOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {UniqueStrategy} [unique] Possible values include: 'cards', 'art',
   * 'prints'
   */
  unique?: UniqueStrategy;
  /**
   * @member {SortOrder} [order] Possible values include: 'name', 'set',
   * 'released', 'rarity', 'color', 'usd', 'tix', 'eur', 'cmc', 'power',
   * 'toughness', 'edhrec', 'artist'
   */
  order?: SortOrder;
  /**
   * @member {SortDirection} [dir] Possible values include: 'auto', 'asc',
   * 'desc'
   */
  dir?: SortDirection;
  /**
   * @member {boolean} [includeExtras]
   */
  includeExtras?: boolean;
  /**
   * @member {number} [page]
   */
  page?: number;
}

/**
 * @interface
 * An interface representing CardsGetNamedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CardsGetNamedOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [exact]
   */
  exact?: string;
  /**
   * @member {string} [fuzzy]
   */
  fuzzy?: string;
  /**
   * @member {string} [set]
   */
  set?: string;
  /**
   * @member {string} [format]
   */
  format?: string;
  /**
   * @member {string} [face]
   */
  face?: string;
  /**
   * @member {string} [version]
   */
  version?: string;
  /**
   * @member {boolean} [pretty]
   */
  pretty?: boolean;
}

/**
 * Defines values for Layouts.
 * Possible values include: 'normal', 'split', 'flip', 'transform', 'meld', 'leveler', 'saga',
 * 'planar', 'scheme', 'vanguard', 'token', 'double_faced_token', 'emblem', 'augment', 'host'
 * @readonly
 * @enum {string}
 */
export type Layouts = 'normal' | 'split' | 'flip' | 'transform' | 'meld' | 'leveler' | 'saga' | 'planar' | 'scheme' | 'vanguard' | 'token' | 'double_faced_token' | 'emblem' | 'augment' | 'host';

/**
 * Defines values for Colors.
 * Possible values include: 'W', 'U', 'B', 'R', 'G'
 * @readonly
 * @enum {string}
 */
export type Colors = 'W' | 'U' | 'B' | 'R' | 'G';

/**
 * Defines values for LegalStatus.
 * Possible values include: 'legal', 'not_legal', 'restricted', 'banned'
 * @readonly
 * @enum {string}
 */
export type LegalStatus = 'legal' | 'not_legal' | 'restricted' | 'banned';

/**
 * Defines values for Rarity.
 * Possible values include: 'common', 'uncommon', 'rare', 'mythic'
 * @readonly
 * @enum {string}
 */
export type Rarity = 'common' | 'uncommon' | 'rare' | 'mythic';

/**
 * Defines values for BorderColors.
 * Possible values include: 'black', 'borderless', 'gold', 'silver', 'white'
 * @readonly
 * @enum {string}
 */
export type BorderColors = 'black' | 'borderless' | 'gold' | 'silver' | 'white';

/**
 * Defines values for SetTypes.
 * Possible values include: 'core', 'expansion', 'masters', 'masterpiece', 'from_the_vault',
 * 'spellbook', 'premium_deck', 'duel_deck', 'commander', 'planechase', 'conspiracy', 'archenemy',
 * 'vanguard', 'funny', 'starter', 'box', 'promo', 'token', 'memorabilia', 'treasure_chest'
 * @readonly
 * @enum {string}
 */
export type SetTypes = 'core' | 'expansion' | 'masters' | 'masterpiece' | 'from_the_vault' | 'spellbook' | 'premium_deck' | 'duel_deck' | 'commander' | 'planechase' | 'conspiracy' | 'archenemy' | 'vanguard' | 'funny' | 'starter' | 'box' | 'promo' | 'token' | 'memorabilia' | 'treasure_chest';

/**
 * Defines values for UniqueStrategy.
 * Possible values include: 'cards', 'art', 'prints'
 * @readonly
 * @enum {string}
 */
export type UniqueStrategy = 'cards' | 'art' | 'prints';

/**
 * Defines values for SortOrder.
 * Possible values include: 'name', 'set', 'released', 'rarity', 'color', 'usd', 'tix', 'eur',
 * 'cmc', 'power', 'toughness', 'edhrec', 'artist'
 * @readonly
 * @enum {string}
 */
export type SortOrder = 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'artist';

/**
 * Defines values for SortDirection.
 * Possible values include: 'auto', 'asc', 'desc'
 * @readonly
 * @enum {string}
 */
export type SortDirection = 'auto' | 'asc' | 'desc';

/**
 * Contains response data for the getAll operation.
 */
export type SetsGetAllResponse = SetList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SetList;
    };
};

/**
 * Contains response data for the getByCode operation.
 */
export type SetsGetByCodeResponse = Set & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Set;
    };
};

/**
 * Contains response data for the search operation.
 */
export type CardsSearchResponse = CardList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CardList;
    };
};

/**
 * Contains response data for the getNamed operation.
 */
export type CardsGetNamedResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the autocomplete operation.
 */
export type CardsAutocompleteResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getRandom operation.
 */
export type CardsGetRandomResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getByMultiverseId operation.
 */
export type CardsGetByMultiverseIdResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getByMtgoId operation.
 */
export type CardsGetByMtgoIdResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getByArenaId operation.
 */
export type CardsGetByArenaIdResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getByCodeByNumber operation.
 */
export type CardsGetByCodeByNumberResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type CardsGetByIdResponse = Card & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Card;
    };
};

/**
 * Contains response data for the getByMultiverseId operation.
 */
export type RulingsGetByMultiverseIdResponse = RulingList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RulingList;
    };
};

/**
 * Contains response data for the getByMtgoId operation.
 */
export type RulingsGetByMtgoIdResponse = RulingList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RulingList;
    };
};

/**
 * Contains response data for the getByCodeByNumberId operation.
 */
export type RulingsGetByCodeByNumberIdResponse = RulingList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RulingList;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type RulingsGetByIdResponse = RulingList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RulingList;
    };
};

/**
 * Contains response data for the getAll operation.
 */
export type SymbologyGetAllResponse = CardSymbolList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CardSymbolList;
    };
};

/**
 * Contains response data for the parseMana operation.
 */
export type SymbologyParseManaResponse = ManaCost & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManaCost;
    };
};

/**
 * Contains response data for the getCardNames operation.
 */
export type CatalogGetCardNamesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getWordBank operation.
 */
export type CatalogGetWordBankResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getCreatureTypes operation.
 */
export type CatalogGetCreatureTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getPlaneswalkerTypes operation.
 */
export type CatalogGetPlaneswalkerTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getLandTypes operation.
 */
export type CatalogGetLandTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getArtifactTypes operation.
 */
export type CatalogGetArtifactTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getEnchantmentTypes operation.
 */
export type CatalogGetEnchantmentTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getSpellTypes operation.
 */
export type CatalogGetSpellTypesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getPowers operation.
 */
export type CatalogGetPowersResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getToughnesses operation.
 */
export type CatalogGetToughnessesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getLoyalties operation.
 */
export type CatalogGetLoyaltiesResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};

/**
 * Contains response data for the getWatermarks operation.
 */
export type CatalogGetWatermarksResponse = Catalog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog;
    };
};