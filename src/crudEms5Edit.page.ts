import { OEElement } from 'oe-test-agent';

export abstract class CrudEms5Edit {
  protected window!: OEElement;

  /**
   * Define a instância do ```OEElement``` da tela de relatório.
   * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```.
   */
  public setWindow(window: OEElement): void {
    this.window = window;
  }

  /**
   * Clica no botão de cópia.
   */

  public copy(): void {
    this.window.findElement('bt_cop').choose();
  }

  /**
   * Clica no botão OK.
   */
  public ok(): void {
    this.window.findElement('bt_ok').choose();
  }

  /**
   * Clica no botão de salvar as alterações.
   */
  public save(): void {
    this.window.findElement('bt_save').choose();
  }

  /**
   * Clica no botão de cancelar as alterações.
   */
  public cancel(): void {
    this.window.findElement('bt_can').choose();
  }

  /**
   * Executa a operação de Ocorrência Anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt_pre2').choose();
  }

  /**
   * Executa a operação de Próxima Ocorrência.
   */
  public nextItem(): void {
    this.window.findElement('bt_nex2').choose();
  }

  /**
   * Executa a operação de Pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt_sea2').choose();
  }

  /**
   * Clica no botão de ajuda.
   */
  public help(): void {
    this.window.findElement('bt_hel2').choose();
  }
}
