// Credits: http://www.powershellmagazine.com/2013/07/18/pstip-how-to-switch-off-display-with-powershell/
//
//     Turn display off by calling WindowsAPI.
//
//     SendMessage(HWND_BROADCAST,WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF)
//     HWND_BROADCAST  0xffff
//     WM_SYSCOMMAND   0x0112
//     SC_MONITORPOWER 0xf170
//     POWER_OFF       0x0002

using System;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

public class Startup
{
    [DllImport("user32.dll", CharSet = CharSet.Auto)]
    private static extern IntPtr SendMessage(
        IntPtr hWnd,
        UInt32 Msg,
        IntPtr wParam,
        IntPtr lParam
    );

    public async Task<object> Invoke(object input)
    {
        SendMessage(
            (IntPtr)0xffff, // HWND_BROADCAST
            0x0112,         // WM_SYSCOMMAND
            (IntPtr)0xf170, // SC_MONITORPOWER
            (IntPtr)0x0002  // POWER_OFF
        );
        return (object)null;
    }
}
