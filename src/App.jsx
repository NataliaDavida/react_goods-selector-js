import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

// const GoodsFromSrver = goods.map(good => {
//   <tr data-cy="Good">
//   <td>
//     <button data-cy="AddButton" type="button" className="button">
//       +
//     </button>
//   </td>

//   <td data-cy="GoodTitle" className="is-vcentered">
//     Dumplings
//   </td>
// </tr>
// })

export const App = () => {
  const [selectedGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        <button
          data-cy="ClearButton"
          type="button"
          className={selectedGood ? 'delete ml-3' : ''}
          onClick={() => {
            setValue('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td
                onClick={() => {
                  setValue(good);
                }}
              >
                <button data-cy="AddButton" type="button" className="button">
                  {good === selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

          {/* <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
};
