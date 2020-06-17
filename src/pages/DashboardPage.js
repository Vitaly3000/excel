import { Page } from '@core/Page';
import { $ } from '@core/dom';
export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
   <div class="db__header">
          <h1>JasaScript Excel</h1>
        </div>
        <div class="db__new">
          <div class="db__view">
            <a href="#" class="db__create">
              Новая <br />
              Таблица
            </a>
          </div>
        </div>
        <div class="db__table db__view">
          <div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
          </div>
          <ul class="db__list">
            <li class="db__record">
              <a href="#">Таблица №1</a>
              <strong>21.05.2020</strong>
            </li>
            <li class="db__record">
              <a href="#">Таблица №2</a>
              <strong>21.05.2020</strong>
            </li>
            <li class="db__record">
              <a href="#">Таблица №3</a>
              <strong>21.05.2020</strong>
            </li>
          </ul>
        </div>
   `);
  }
}