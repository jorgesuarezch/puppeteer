/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const base = require('./base');

module.exports = {
  ...base,
  file: ['./test/mocha-utils.js'],
  spec: 'test/*.spec.js',
  // retry twice more, so we run each test up to 3 times if needed.
  retries: 2,
  timeout: 25 * 1000,
};
