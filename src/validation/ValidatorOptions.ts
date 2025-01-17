/**
 * Options passed to validator during validation.
 */
export interface ValidatorOptions {
  /**
   * If set to true then class-validator will print extra warning messages to the console when something is not right.
   */
  enableDebugMessages?: boolean;

  /**
   * If set to true then validator will skip validation of all properties that are undefined in the validating object.
   */
  skipUndefinedProperties?: boolean;

  /**
   * If set to true then validator will skip validation of all properties that are null in the validating object.
   */
  skipNullProperties?: boolean;

  /**
   * If set to true then validator will skip validation of all properties that are null or undefined in the validating object.
   */
  skipMissingProperties?: boolean;

  /**
   * If set to true validator will strip validated object of any properties that do not have any decorators.
   *
   * Tip: if no other decorator is suitable for your property use @Allow decorator.
   */
  whitelist?: boolean;

  /**
   * If set to true, instead of stripping non-whitelisted properties validator will throw an error
   */
  forbidNonWhitelisted?: boolean;

  /**
   * Groups to be used during validation of the object.
   */
  groups?: string[];

  /**
   * Set default for `always` option of decorators. Default can be overridden in decorator options.
   */
  always?: boolean;

  /**
   * If [groups]{@link ValidatorOptions#groups} is not given or is empty,
   * ignore decorators with at least one group.
   */
  strictGroups?: boolean;

  /**
   * If set to true, the validation will not use default messages.
   * Error message always will be undefined if its not explicitly set.
   */
  dismissDefaultMessages?: boolean;

  /**
   * ValidationError special options.
   */
  validationError?: {
    /**
     * Indicates if target should be exposed in ValidationError.
     */
    target?: boolean;

    /**
     * Indicates if validated value should be exposed in ValidationError.
     */
    value?: boolean;
  };

  /**
   * Setting this to false will allow unknown objects (i.e. objects whose prototype classes have no validation metadata) to pass validation.
   * If you do not specify a value or you use null or undefined, a safe value of true will be used to prevent accidental validation bypass.
   *
   * For instance, since a plain empty object has no annotations used for validation:
   * - `validate({}, { })` // fails
   * - `validate({}, { forbidUnknownValues: true })` // fails
   * - `validate({}, { forbidUnknownValues: false })` // passes
   * - `validate(new SomeAnnotatedEmptyClass(), { forbidUnknownValues: true })` // passes
   * - `validate(new SomeAnnotatedEmptyClass(), { })` // passes
   */
  forbidUnknownValues?: boolean;

  /**
   * When set to true, validation of the given property will stop after encountering the first error. Defaults to false.
   */
  stopAtFirstError?: boolean;
}
