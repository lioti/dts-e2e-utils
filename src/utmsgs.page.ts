import { OEAgent, oeAgent, OEElement } from 'oe-test-agent';

export class UTMSGS {
  private static getWindow(msg: string | OEElement, timeout = OEAgent.DEFAULT_TIMEOUT): OEElement {
    return typeof msg === 'string' ? oeAgent.waitForWindow(msg, timeout) : msg;
  }

  public static getMessageWindow(title: string, timeout?: number): OEElement {
    return this.getWindow(title, timeout);
  }

  public static ok(msg: string | OEElement, timeout?: number): void {
    this.getWindow(msg, timeout).findElement('bt_ok').choose();
  }

  public static yes(msg: string | OEElement, timeout?: number): void {
    this.getWindow(msg, timeout).findElement('bt_ok').choose();
  }

  public static no(msg: string | OEElement, timeout?: number): void {
    this.getWindow(msg, timeout).findElement('bt_no').choose();
  }

  public static getMessage(msg: string | OEElement, timeout?: number): Promise<string> {
    return this.getWindow(msg, timeout).findElement('v_msg_val').getValue();
  }

  public static getHelp(msg: string | OEElement, timeout?: number): Promise<string> {
    return this.getWindow(msg, timeout).findElement('v_msg_hlp').getValue();
  }
}
