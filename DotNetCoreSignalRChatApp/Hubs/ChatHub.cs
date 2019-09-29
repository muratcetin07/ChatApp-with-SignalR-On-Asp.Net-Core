using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSignalRChatApp.Hubs
{
    public class ChatHub :Hub
    {
        /// <summary>
        /// server call client "ReceiveMessage" method when a message occured.
        /// </summary>
        /// <param name="username"></param>
        /// <param name="message"></param>
        /// <returns></returns>
        public async Task SendMessage(string nickname, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", nickname, message);
        }
    }
}
