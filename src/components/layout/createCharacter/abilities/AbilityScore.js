import React from "react";

const AbilityScore = () => {
  return (
    <div className="col s6">
      <table className="ab-table striped">
        <thead>
          <tr>
            <th>Abilities</th>
            <th>Base points</th>
            <th>Racial Bonus</th>
            <th>Modifier</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr id="strength" className="ability">
            <td>Strength</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="strength-points"
                name="str"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="str-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="strength-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
          <tr id="dexterity" className="ability">
            <td>Dexterity</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="dexterity-points"
                name="dex"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="dex-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="dexterity-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
          <tr id="constitution" className="ability">
            <td>Constitution</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="consitution-points"
                name="con"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="con-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="constitution-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
          <tr id="intelligence" className="ability">
            <td>Intelligence</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="intelligence-points"
                name="int"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="int-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="intelligence-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
          <tr id="wisdom" className="ability">
            <td>Wisdom</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="wisdom-points"
                name="wis"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="wis-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="wisdom-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
          <tr id="charisma" className="ability">
            <td>Charisma</td>
            <td>
              <input
                type="number"
                className="ability-input"
                id="charisma-points"
                name="char"
                min="8"
                max="15"
                defaultValue="8"
              />
              <button type="button" className="minus">
                <i className="material-icons minus-icon">indeterminate_check_box</i>
              </button>
              <button type="button" className="plus">
                <i className="material-icons plus-icon">add_box</i>
              </button>
            </td>
            <td className="race-bonus">+1</td>
            <td>
              <input name="char-mod" className="modifier hidden-input" defaultValue="-1" />
            </td>
            <td>
              <input name="charisma-points" className="total hidden-input" defaultValue="9" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AbilityScore;
