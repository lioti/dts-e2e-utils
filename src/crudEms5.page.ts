import { OEElement } from 'oe-test-agent';

export abstract class CrudEms5 {
  protected window!: OEElement;

  /**
   * Define a instância do ```OEElement``` da tela de relatório.
   * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```.
   */
  public setWindow(window: OEElement): void {
    this.window = window;
  }

  /**
   * Clica no botão de inclusão.
   */
  public add(): void {
    this.window.findElement('bt_add1').choose();
  }

  /**
   * Clica no botão de exclusão.
   */
  public delete(): void {
    this.window.findElement('bt_era1').choose();
  }

  /**
   * Clica no botão de modificação.
   */
  public modify(): void {
    this.window.findElement('bt_mod1').choose();
  }

  /**
   * Clica no botão para navegar até o primeiro registro.
   */
  public firstItem(): void {
    this.window.findElement('bt_fir').choose();
  }

  /**
   * Clica no botão para navegar até o registro anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt_pre1').choose();
  }

  /**
   * Clica no botão para navegar até o próximo registro.
   */
  public nextItem(): void {
    this.window.findElement('bt_nex1').choose();
  }

  /**
   * Clica no botão para navegar até o último registro.
   */
  public lastItem(): void {
    this.window.findElement('bt_las').choose();
  }

  /**
   * Clica no botão de pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt_sea1').choose();
  }

  /**
   * Clica no botão de sair.
   */
  public exit(): void {
    this.window.findElement('bt_exi').choose();
  }

  /**
   * Clica no botão de ajuda.
   */
  public help(): void {
    this.window.findElement('bt_hel1').choose();
  }

  /**
   * Executa a operação de Relatórios.
   */
  public reports(): void {
    this.window.findElement('bt_pri').choose();
  }

  /**
   * Clica no botão de detalhes.
   */
  public detail(): void {
    this.window.findElement('bt_det1').choose();
  }
}
