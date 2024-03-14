/*
CPAL-1.0 License

The contents of this file are subject to the Common Public Attribution License
Version 1.0. (the "License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
https://github.com/EtherealEngine/etherealengine/blob/dev/LICENSE.
The License is based on the Mozilla Public License Version 1.1, but Sections 14
and 15 have been added to cover use of software over a computer network and 
provide for limited attribution for the Original Developer. In addition, 
Exhibit A has been modified to be consistent with Exhibit B.

Software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the
specific language governing rights and limitations under the License.

The Original Code is Ethereal Engine.

The Original Developer is the Initial Developer. The Initial Developer of the
Original Code is the Ethereal Engine team.

All portions of the code written by the Ethereal Engine team are Copyright © 2021-2023 
Ethereal Engine. All Rights Reserved.
*/

import { Engine, matchesEntityUUID } from '@etherealengine/ecs'
import { defineAction, matchesPeerID, matchesWithDefault } from '@etherealengine/hyperflux'
import { NetworkTopics } from '../Network'
import { NetworkObjectComponent, matchesNetworkId } from '../NetworkObjectComponent'
import { matchesUserID } from './matchesUserID'

export class WorldNetworkAction {
  static spawnEntity = defineAction({
    type: 'ee.network.SPAWN_ENTITY',
    entityUUID: matchesEntityUUID,
    networkId: matchesWithDefault(matchesNetworkId, () => NetworkObjectComponent.createNetworkId()),
    ownerID: matchesWithDefault(matchesUserID, () => Engine.instance.userID),
    authorityPeerId: matchesPeerID.optional(),
    $cache: true,
    $topic: NetworkTopics.world
  })

  static destroyEntity = defineAction({
    type: 'ee.network.DESTROY_ENTITY',
    entityUUID: matchesEntityUUID,
    $cache: true,
    $topic: NetworkTopics.world
  })

  static requestAuthorityOverObject = defineAction({
    /** @todo embed $to restriction */
    type: 'ee.engine.world.REQUEST_AUTHORITY_OVER_ENTITY',
    entityUUID: matchesEntityUUID,
    newAuthority: matchesPeerID,
    $topic: NetworkTopics.world
  })

  static transferAuthorityOfObject = defineAction({
    type: 'ee.engine.world.TRANSFER_AUTHORITY_OF_ENTITY',
    ownerID: matchesUserID,
    entityUUID: matchesEntityUUID,
    newAuthority: matchesPeerID,
    $topic: NetworkTopics.world,
    $cache: true
  })
}