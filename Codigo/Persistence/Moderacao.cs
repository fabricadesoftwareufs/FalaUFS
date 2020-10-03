using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Moderacao
    {
        public byte[] IdTipoModeracao { get; set; }
        public byte[] IdOpiniao { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public DateTimeOffset DtAlt { get; set; }
    }
}
