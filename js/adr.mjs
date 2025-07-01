/**
 * Use this function in the `postProcess` option of your Respec config.
 * Example:
 *
 * ```js
 * postProcess: [processRuleBlocks],
 * ```
 *
 * It generates a list for each rule as defined in blocks. To do so, the
 * following parts need to be part of your HTML:
 *
 * ```html
 * <ul id="functionalList"></ul>
 * <ul id="technicalList"></ul>
 * ```
 *
 * Additionally, for a rule to appear in these lists, the following HTML
 * needs to be used for each rule:
 *
 * ```html
 * <div class="rule" id="/name/of/your/rule" data-type="functional/technical">
 *   <p class="rulelab">Title of your rule</p>
 * </div>
 * ```
 *
 * The `id` needs to be text that can be used in a URL. Use kebab-case and
 * `/` to separate parts. For example, the ADR core uses `/core/name-of-rule`
 * for all its rules.
 *
 * The `data-type` can be one of the following: functional, technical.
 * Use technical when a rule can be automatically checked, for example with
 * a linter. Use functional when a human needs to look at the API definition
 * or its implementation to determine whether the API satisfies the rule.
 *
 * The `rulelab` paragraph is used to generate a human-readable title. This
 * text will also be used in the lists as a summary after a clickable link
 * that points to the rule.
 */
export function processRuleBlocks(config, document, utils, spectralConfiguration) {
  const functionalRules = [];
  const technicalRules = [];
  for (const rule of document.querySelectorAll('.rule')) {
    if (!rule.id) {
      throw new Error(`Missing id for rule: ${rule.outerHTML}`);
    }
    const ruleId = rule.id;

    const ruleLabElement = rule.querySelector('.rulelab');
    ruleLabElement.innerText = `: ${ruleLabElement.innerText}`;
    const ruleLinkElement = document.createElement('a');
    ruleLinkElement.href = `#${ruleId}`;
    ruleLinkElement.innerText = ruleId;
    ruleLabElement.prepend(ruleLinkElement);

    let flagTitle;
    const flagType = rule.dataset.type;
    if (flagType === 'technical') {
      flagTitle = 'This is a technical design rule and hence should be tested automatically.';
      technicalRules.push(ruleLabElement);

      if (spectralConfiguration?.includes(`#${ruleId}`)) {
        const lastDataListItem = rule.querySelector('dt:last-of-type');
        if (lastDataListItem.textContent !== 'How to test') {
          throw new Error(`Last element should be the "How to test" section. Found ${lastDataListItem.outerHTML}`);
        }
        const howToTest = rule.querySelector('dd:last-of-type');
        howToTest.innerHTML += `This rule can be automatically checked and an example test is shown in the <a href="#:~:text=${encodeURIComponent(`#${ruleId}`).replaceAll('-', '%2D')}">linter configuration</a>.`;
      }
    } else if (flagType === 'functional') {
      flagTitle = 'This is a functional design rule and hence cannot be tested automatically.';
      functionalRules.push(ruleLabElement);
    } else {
      throw new Error(`Missing type for rule: ${rule.outerHTML}`);
    }

    const flagElement = document.createElement('div');
    flagElement.title = flagTitle;
    flagElement.innerText = flagType;
    flagElement.classList.add('flag');
    rule.prepend(flagElement);
  }

  for (const [list, elementId] of [[functionalRules, '#functionalList'], [technicalRules, '#technicalList']]) {
    const listElement = document.querySelector(elementId);

    for (const ruleLabElement of list) {
      const listItem = document.createElement('li');
      listItem.innerHTML = ruleLabElement.innerHTML;
      listElement.append(listItem);
    }
  }
}
