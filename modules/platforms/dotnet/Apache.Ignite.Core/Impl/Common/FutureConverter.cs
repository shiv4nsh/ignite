/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Apache.Ignite.Core.Impl.Common
{
    using System;
    using Apache.Ignite.Core.Impl.Portable;
    using Apache.Ignite.Core.Impl.Portable.IO;

    /// <summary>
    /// Marshals and converts future value.
    /// </summary>
    internal class FutureConverter<T> : IFutureConverter<T>
    {
        /** Marshaller. */
        private readonly PortableMarshaller _marsh;

        /** Keep portable flag. */
        private readonly bool _keepPortable;

        /** Converting function. */
        private readonly Func<PortableReaderImpl, T> _func;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="marsh">Marshaller.</param>
        /// <param name="keepPortable">Keep portable.</param>
        /// <param name="func">Converting function.</param>
        public FutureConverter(PortableMarshaller marsh, bool keepPortable,
            Func<PortableReaderImpl, T> func = null)
        {
            _marsh = marsh;
            _keepPortable = keepPortable;
            _func = func ?? (reader => reader == null ? default(T) : reader.ReadObject<T>());
        }

        /// <summary>
        /// Read and convert a value.
        /// </summary>
        public T Convert(IPortableStream stream)
        {
            var reader = stream == null ? null : _marsh.StartUnmarshal(stream, _keepPortable);

            return _func(reader);
        }
    }
}