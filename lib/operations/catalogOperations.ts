/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/catalogOperationsMappers";
import { ScryfallClientContext } from "../scryfallClientContext";

/** Class representing a CatalogOperations. */
export class CatalogOperations {
  private readonly client: ScryfallClientContext;

  /**
   * Create a CatalogOperations.
   * @param {ScryfallClientContext} client Reference to the service client.
   */
  constructor(client: ScryfallClientContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetCardNamesResponse>
   */
  getCardNames(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetCardNamesResponse>;
  /**
   * @param callback The callback
   */
  getCardNames(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getCardNames(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getCardNames(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetCardNamesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getCardNamesOperationSpec,
      callback) as Promise<Models.CatalogGetCardNamesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetWordBankResponse>
   */
  getWordBank(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetWordBankResponse>;
  /**
   * @param callback The callback
   */
  getWordBank(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWordBank(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getWordBank(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetWordBankResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getWordBankOperationSpec,
      callback) as Promise<Models.CatalogGetWordBankResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetCreatureTypesResponse>
   */
  getCreatureTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetCreatureTypesResponse>;
  /**
   * @param callback The callback
   */
  getCreatureTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getCreatureTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getCreatureTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetCreatureTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getCreatureTypesOperationSpec,
      callback) as Promise<Models.CatalogGetCreatureTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetPlaneswalkerTypesResponse>
   */
  getPlaneswalkerTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetPlaneswalkerTypesResponse>;
  /**
   * @param callback The callback
   */
  getPlaneswalkerTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPlaneswalkerTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getPlaneswalkerTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetPlaneswalkerTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPlaneswalkerTypesOperationSpec,
      callback) as Promise<Models.CatalogGetPlaneswalkerTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetLandTypesResponse>
   */
  getLandTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetLandTypesResponse>;
  /**
   * @param callback The callback
   */
  getLandTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLandTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getLandTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetLandTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLandTypesOperationSpec,
      callback) as Promise<Models.CatalogGetLandTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetArtifactTypesResponse>
   */
  getArtifactTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetArtifactTypesResponse>;
  /**
   * @param callback The callback
   */
  getArtifactTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getArtifactTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getArtifactTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetArtifactTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getArtifactTypesOperationSpec,
      callback) as Promise<Models.CatalogGetArtifactTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetEnchantmentTypesResponse>
   */
  getEnchantmentTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetEnchantmentTypesResponse>;
  /**
   * @param callback The callback
   */
  getEnchantmentTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEnchantmentTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getEnchantmentTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetEnchantmentTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEnchantmentTypesOperationSpec,
      callback) as Promise<Models.CatalogGetEnchantmentTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetSpellTypesResponse>
   */
  getSpellTypes(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetSpellTypesResponse>;
  /**
   * @param callback The callback
   */
  getSpellTypes(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getSpellTypes(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getSpellTypes(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetSpellTypesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSpellTypesOperationSpec,
      callback) as Promise<Models.CatalogGetSpellTypesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetPowersResponse>
   */
  getPowers(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetPowersResponse>;
  /**
   * @param callback The callback
   */
  getPowers(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPowers(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getPowers(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetPowersResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPowersOperationSpec,
      callback) as Promise<Models.CatalogGetPowersResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetToughnessesResponse>
   */
  getToughnesses(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetToughnessesResponse>;
  /**
   * @param callback The callback
   */
  getToughnesses(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getToughnesses(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getToughnesses(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetToughnessesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getToughnessesOperationSpec,
      callback) as Promise<Models.CatalogGetToughnessesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetLoyaltiesResponse>
   */
  getLoyalties(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetLoyaltiesResponse>;
  /**
   * @param callback The callback
   */
  getLoyalties(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLoyalties(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getLoyalties(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetLoyaltiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLoyaltiesOperationSpec,
      callback) as Promise<Models.CatalogGetLoyaltiesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CatalogGetWatermarksResponse>
   */
  getWatermarks(options?: msRest.RequestOptionsBase): Promise<Models.CatalogGetWatermarksResponse>;
  /**
   * @param callback The callback
   */
  getWatermarks(callback: msRest.ServiceCallback<Models.Catalog>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWatermarks(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Catalog>): void;
  getWatermarks(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Catalog>, callback?: msRest.ServiceCallback<Models.Catalog>): Promise<Models.CatalogGetWatermarksResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getWatermarksOperationSpec,
      callback) as Promise<Models.CatalogGetWatermarksResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getCardNamesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/card-names",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getWordBankOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/word-bank",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getCreatureTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/creature-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPlaneswalkerTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/planeswalker-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLandTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/land-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getArtifactTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/artifact-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEnchantmentTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/enchantment-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSpellTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/spell-types",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPowersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/powers",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getToughnessesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/thoughnesses",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLoyaltiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/loyalties",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getWatermarksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "catalog/watermarks",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
