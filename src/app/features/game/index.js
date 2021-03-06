import './game.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './game.routes';
import GameController from './game.controller';
import game from '../../services/game';
import bitcoinNode from '../../services/bitcoinNode';
import wallet from '../../services/wallet';


export default angular.module('app.game', [uirouter, game, bitcoinNode, wallet])
  .config(routing)
  .controller('GameController', GameController)
  .name;
